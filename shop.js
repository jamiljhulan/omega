document.addEventListener("DOMContentLoaded", () => {
    
    // --- Elements ---
    const searchInput = document.getElementById('product-search');
    const sortDropdown = document.getElementById('product-sort');
    const categoryFilters = document.querySelectorAll('.category-filter');
    const productGrid = document.getElementById('product-grid');
    let products = Array.from(document.querySelectorAll('.shop-card'));

    // --- State ---
    let activeSearch = "";
    let activeCategories = [];
    let activeSort = "featured";

    // --- 1. The Core Filter Engine ---
    function updateGrid() {
        products.forEach(product => {
            // Get product data
            const title = product.querySelector('.shop-card-title').textContent.toLowerCase();
            const desc = product.querySelector('.shop-card-desc').textContent.toLowerCase();
            const category = product.getAttribute('data-category');
            
            // Check Search
            const matchesSearch = title.includes(activeSearch) || desc.includes(activeSearch);
            
            // Check Categories (If array is empty, all categories match)
            const matchesCategory = activeCategories.length === 0 || activeCategories.includes(category);

            // Apply Display
            if (matchesSearch && matchesCategory) {
                product.style.display = 'flex'; // Reset to flex to maintain card layout
                // Add a tiny animation for premium feel
                product.style.animation = 'fadeInUp 0.4s ease forwards';
            } else {
                product.style.display = 'none';
            }
        });
    }

    // --- 2. Sorting Logic ---
    function sortGrid() {
        const sortedProducts = products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute('data-price'));
            const priceB = parseFloat(b.getAttribute('data-price'));

            if (activeSort === 'price-low') {
                return priceA - priceB;
            } else if (activeSort === 'price-high') {
                return priceB - priceA;
            } else {
                // For 'featured' or 'newest', we return to original DOM order
                return 0; 
            }
        });

        // Re-append sorted elements to the grid
        productGrid.innerHTML = '';
        sortedProducts.forEach(product => productGrid.appendChild(product));
        
        // Re-run the filter to ensure hidden items stay hidden
        updateGrid();
    }

    // --- 3. Event Listeners ---
    
    // Search Typing
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            activeSearch = e.target.value.toLowerCase();
            updateGrid();
        });
    }

    // Category Checkboxes
    categoryFilters.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Rebuild active categories array based on checked boxes
            activeCategories = Array.from(categoryFilters)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            updateGrid();
        });
    });

    // Sort Dropdown
    if (sortDropdown) {
        sortDropdown.addEventListener('change', (e) => {
            activeSort = e.target.value;
            sortGrid();
        });
    }

    // --- 4. Dynamic Quick View Modal ---
    function initQuickView() {
        const quickViewBtns = document.querySelectorAll('.quick-view-btn');
        
        // Create the Modal HTML container
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'quick-view-modal';
        document.body.appendChild(modalOverlay);

        quickViewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.shop-card');
                
                // Extract data from the clicked card
                const imgSrc = card.querySelector('img').src;
                const title = card.querySelector('.shop-card-title').textContent;
                const desc = card.querySelector('.shop-card-desc').textContent;
                const originalPrice = card.querySelector('.price-original') ? card.querySelector('.price-original').textContent : '';
                const currentPrice = card.querySelector('.price-sale') ? card.querySelector('.price-sale').textContent : card.querySelector('.price-current').textContent;
                
                // Inject data into the modal
                modalOverlay.innerHTML = `
                    <div class="modal-content glass-effect">
                        <button class="modal-close">&times;</button>
                        <div class="modal-grid">
                            <div class="modal-img-col">
                                <img src="${imgSrc}" alt="${title}">
                            </div>
                            <div class="modal-info-col">
                                <h2>${title}</h2>
                                <p>${desc}</p>
                                <div class="modal-pricing">
                                    <span style="text-decoration: line-through; color: #666; font-size: 1rem;">${originalPrice}</span>
                                    <span style="font-size: 1.5rem; font-weight: 700; color: #000;">${currentPrice}</span>
                                </div>
                                <div class="modal-actions">
                                    <a href="https://ig.me/m/omegahubonline" target="_blank" class="btn-primary" style="display: block; width: 100%; margin-bottom: 10px;">DM TO BUY INSTANTLY</a>
                                    <p style="font-size: 0.8rem; color: #666; text-align: center;">Want a better deal? Message us on Instagram to negotiate!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Show Modal
                modalOverlay.classList.add('modal-active');
                document.body.style.overflow = 'hidden'; // Stop background scrolling

                // Close Modal Logic
                const closeBtn = modalOverlay.querySelector('.modal-close');
                closeBtn.addEventListener('click', closeQuickView);
                modalOverlay.addEventListener('click', (e) => {
                    if(e.target === modalOverlay) closeQuickView();
                });
            });
        });

        function closeQuickView() {
            modalOverlay.classList.remove('modal-active');
            document.body.style.overflow = '';
        }
    }

    initQuickView();
});