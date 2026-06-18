// 1. Store the HTML and CSS in a variable
const footerHTML = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

    <footer class="hub-global-footer" itemscope itemtype="https://schema.org/WPFooter">
        
        <div class="hub-footer-banner">
            <div class="hub-footer-banner-content">
                <h2 class="hub-banner-title">SEE IT. WANT IT. <span class="hub-text-pink">DM US TO GET IT.</span></h2>
                <p class="hub-banner-sub">Skip the cart. Slide into our DMs for exclusive drops, instant ordering, and VIP customer service.</p>
                <a href="https://ig.me/m/omegahubonline" target="_blank" class="hub-banner-btn" aria-label="DM us on Instagram">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    DM @OMEGAHUBONLINE
                </a>
            </div>
        </div>

        <div class="hub-footer-main">
            <div class="hub-footer-grid">
                
                <div class="hub-footer-col hub-col-brand">
                    <a href="/index.html" class="hub-footer-logo">OMEGA HUB</a>
                    <p class="hub-footer-bio">Curating the ultimate "Fashion Girl" aesthetic. Premium designer bags, shoes, and accessories delivered straight to your door. Fast, flawless, and fashionable.</p>
                    <p class="hub-trust-badge">🇺🇸 FAST & FREE US SHIPPING OVER $150</p>
                </div>

                <div class="hub-footer-col">
                    <h3 class="hub-footer-heading">Shop The Look</h3>
                    <ul class="hub-footer-links">
                        <li><a href="new-in.html">New Arrivals 🔥</a></li>
                        <li><a href="bags.html">Designer Bags</a></li>
                        <li><a href="shoes.html">Luxury Shoes</a></li>
                        <li><a href="watches.html">Premium Watches</a></li>
                        <li><a href="sale.html">Clearance Sale</a></li>
                    </ul>
                </div>

                <div class="hub-footer-col">
                    <h3 class="hub-footer-heading">Customer Care</h3>
                    <ul class="hub-footer-links">
                        <li><a href="shipping.html">US Shipping Policy</a></li>
                        <li><a href="returns.html">Returns & Exchanges</a></li>
                        <li><a href="track-order.html">Track Your Order</a></li>
                        <li><a href="faqs.html">FAQs</a></li>
                    </ul>
                </div>

                <div class="hub-footer-col">
                    <h3 class="hub-footer-heading">Stay Connected</h3>
                    <ul class="hub-footer-links">
                        <li><a href="https://instagram.com/omegahubonline" target="_blank">Instagram (@omegahubonline)</a></li>
                        <li><a href="mailto:hello@omegahub.online">hello@omegahub.online</a></li>
                        <li><a href="mailto:hello@omegahubonline@gmail.com">omegahubonline@gmail.com</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="hub-footer-bottom">
            <div class="hub-footer-bottom-inner">
                <p class="hub-copyright">&copy; <span id="hub-year"></span> Omega Hub Online. All Rights Reserved.</p>
                <div class="hub-legal-links">
                    <a href="privacy-policy.html">Privacy Policy</a>
                    <a href="terms-of-service.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>

    <style>
        /* --- CSS Variables --- */
        :root {
            --hub-black: #000000;
            --hub-white: #FFFFFF;
            --hub-accent-pink: #FF0055; 
            --hub-gray-dark: #111111;
            --hub-text-muted: #A0A0A0;
            
            --font-brand: 'Anton', sans-serif;
            --font-ui: 'Inter', sans-serif;
        }

        .hub-global-footer {
            width: 100%;
            background-color: var(--hub-black);
            color: var(--hub-white);
            font-family: var(--font-ui);
        }

        /* --- Massive Pre-Footer CTA --- */
        .hub-footer-banner {
            background-color: var(--hub-gray-dark);
            border-top: 2px solid var(--hub-accent-pink);
            border-bottom: 1px solid #333;
            padding: 80px 20px;
            text-align: center;
        }

        .hub-footer-banner-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .hub-banner-title {
            font-family: var(--font-brand);
            font-size: 4rem;
            line-height: 1.1;
            margin: 0 0 15px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
        }

        .hub-text-pink {
            color: var(--hub-accent-pink);
        }

        .hub-banner-sub {
            font-size: 1.1rem;
            color: var(--hub-text-muted);
            margin: 0 0 35px 0;
            font-weight: 400;
        }

        .hub-banner-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            background-color: var(--hub-accent-pink);
            color: var(--hub-white);
            padding: 18px 40px;
            font-family: var(--font-ui);
            font-size: 1.2rem;
            font-weight: 700;
            text-transform: uppercase;
            text-decoration: none;
            border-radius: 50px;
            letter-spacing: 1px;
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .hub-banner-btn:hover {
            background-color: var(--hub-white);
            color: var(--hub-black);
            transform: translateY(-5px);
        }

        /* --- Main Footer Grid --- */
        .hub-footer-main {
            padding: 80px 4%;
            max-width: 1400px;
            margin: 0 auto;
        }

        .hub-footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 60px;
        }

        /* Brand Column */
        .hub-footer-logo {
            font-family: var(--font-brand);
            font-size: 2.5rem;
            color: var(--hub-white);
            text-decoration: none;
            letter-spacing: 1px;
            display: inline-block;
            margin-bottom: 20px;
        }

        .hub-footer-bio {
            color: var(--hub-text-muted);
            font-size: 0.95rem;
            line-height: 1.6;
            margin-bottom: 25px;
            max-width: 90%;
        }

        .hub-trust-badge {
            display: inline-block;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 8px 15px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--hub-white);
            border-left: 3px solid var(--hub-accent-pink);
        }

        /* Links Columns */
        .hub-footer-heading {
            font-family: var(--font-brand);
            font-size: 1.5rem;
            color: var(--hub-white);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0 0 25px 0;
        }

        .hub-footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .hub-footer-links a {
            color: var(--hub-text-muted);
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: color 0.3s ease, padding-left 0.3s ease;
        }

        .hub-footer-links a:hover {
            color: var(--hub-accent-pink);
            padding-left: 8px; /* Edgy hover effect */
        }

        /* --- Bottom Bar --- */
        .hub-footer-bottom {
            border-top: 1px solid #222;
            padding: 25px 4%;
        }

        .hub-footer-bottom-inner {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .hub-copyright {
            color: var(--hub-text-muted);
            font-size: 0.85rem;
            margin: 0;
        }

        .hub-legal-links {
            display: flex;
            gap: 20px;
        }

        .hub-legal-links a {
            color: var(--hub-text-muted);
            text-decoration: none;
            font-size: 0.85rem;
            transition: color 0.3s ease;
        }

        .hub-legal-links a:hover {
            color: var(--hub-white);
        }

        /* --- Responsive Breakpoints --- */
        @media (max-width: 1024px) {
            .hub-footer-grid {
                grid-template-columns: 1fr 1fr;
                gap: 50px;
            }
            .hub-banner-title { font-size: 3rem; }
        }

        @media (max-width: 768px) {
            .hub-footer-banner { padding: 60px 20px; }
            .hub-banner-title { font-size: 2.2rem; }
            .hub-footer-grid { grid-template-columns: 1fr; gap: 40px; }
            .hub-footer-bottom-inner { flex-direction: column; gap: 15px; text-align: center; }
            .hub-footer-bio { max-width: 100%; }
        }
    </style>
`;

// 2. Inject the HTML into your placeholder
document.getElementById("footer-placeholder").innerHTML = footerHTML;

// 3. Initialize the Interactive Logic (Copyright Year)
(function initHubFooter() {
    const yearSpan = document.getElementById('hub-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
})();