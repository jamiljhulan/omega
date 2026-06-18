// 1. Store the HTML and CSS in a variable
const headerHTML = `
    <link rel="icon" href="images/favicon.png" type="image/png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">

    <header class="hub-global-header" itemscope itemtype="https://schema.org/WPHeader">
        
        <div class="hub-marquee-container">
            <div class="hub-marquee">
                <span>🔥 FAST & FREE US SHIPPING OVER $150</span>
                <span>💖 NEW ARRIVALS JUST DROPPED</span>
                <span>✨ DM @OMEGAHUBONLINE TO ORDER</span>
                <span>🔥 FAST & FREE US SHIPPING OVER $150</span>
                <span>💖 NEW ARRIVALS JUST DROPPED</span>
                <span>✨ DM @OMEGAHUBONLINE TO ORDER</span>
            </div>
        </div>

        <div class="hub-nav-wrapper">
            
            <button class="hub-mobile-toggle" aria-label="Open Mobile Menu" aria-expanded="false">
                <span class="hub-bar"></span>
                <span class="hub-bar"></span>
                <span class="hub-bar"></span>
            </button>

            <a href="index.html" class="hub-brand" aria-label="Omega Hub Online Home">
                OMEGA HUB
            </a>

            <nav class="hub-desktop-nav" aria-label="Primary Navigation">
                <ul class="hub-nav-list">
                    <li><a href="new-in.html" class="hub-nav-link hub-highlight">New In</a></li>
                    <li><a href="bags.html" class="hub-nav-link">Bags</a></li>
                    <li><a href="shoes.html" class="hub-nav-link">Shoes</a></li>
                    <li><a href="watches.html" class="hub-nav-link">Watches</a></li>
                    <li><a href="discover.html" class="hub-nav-link">Discover</a></li>
                    <li><a href="sale.html" class="hub-nav-link hub-sale">Sale</a></li>
                </ul>
            </nav>

            <div class="hub-actions">
                <a href="https://ig.me/m/omegahubonline" target="_blank" class="hub-ig-button" aria-label="Order via Instagram DM">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span class="hub-ig-text">Order via DM</span>
                </a>
            </div>
        </div>

        <div class="hub-mobile-menu" aria-hidden="true">
            <nav class="hub-mobile-nav">
                <a href="new.html" class="hub-mobile-link hub-highlight">New In</a>
                <a href="bags.html" class="hub-mobile-link">Bags</a>
                <a href="shoes.html" class="hub-mobile-link">Shoes</a>
                <a href="watches.html" class="hub-mobile-link">Watches</a>
                <a href="discover.html" class="hub-mobile-link">Discover</a>
                <a href="sale.html" class="hub-mobile-link hub-sale">Sale</a>
            </nav>
            <div class="hub-mobile-footer">
                <a href="https://ig.me/m/omegahubonline" class="hub-mobile-ig-btn">DM @OMEGAHUBONLINE</a>
            </div>
        </div>
    </header>

    <style>
        /* --- CSS Variables for the "It-Girl" Vibe --- */
        :root {
            --hub-black: #000000;
            --hub-white: #FFFFFF;
            --hub-accent-pink: #FF0055;
            --hub-gray: #F4F4F4;
            
            --font-brand: 'Anton', sans-serif;
            --font-ui: 'Inter', sans-serif;
        }

        .hub-global-header {
            width: 100%;
            background: var(--hub-white);
            position: fixed; /* Changed to fixed for smart scroll */
            top: 0;
            left: 0;
            z-index: 1000;
            border-bottom: 2px solid var(--hub-black);
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Pad the body so content doesn't hide behind the fixed header */
        body {
            padding-top: 110px; 
            margin: 0;
        }

        /* --- High-Energy Marquee --- */
        .hub-marquee-container {
            background-color: var(--hub-accent-pink);
            color: var(--hub-white);
            overflow: hidden;
            white-space: nowrap;
            padding: 8px 0;
            font-family: var(--font-ui);
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 1px;
        }

        .hub-marquee {
            display: inline-block;
            animation: marquee-scroll 15s linear infinite;
        }

        .hub-marquee span { margin-right: 40px; }

        @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }

        /* --- Navigation Layout --- */
        .hub-nav-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 4%;
            height: 75px;
            max-width: 1400px;
            margin: 0 auto;
        }

        /* --- Bold Typography Brand --- */
        .hub-brand {
            font-family: var(--font-brand);
            font-size: 2.2rem;
            color: var(--hub-black);
            text-decoration: none;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: transform 0.2s ease;
        }
        .hub-brand:hover { transform: scale(1.02); }

        /* --- Desktop Navigation --- */
        .hub-desktop-nav { display: flex; }
        .hub-nav-list { display: flex; gap: 30px; list-style: none; margin: 0; padding: 0; }
        .hub-nav-link {
            font-family: var(--font-ui);
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--hub-black);
            text-decoration: none;
            text-transform: uppercase;
            position: relative;
            transition: color 0.3s ease;
        }
        
        .hub-nav-link::after {
            content: ''; position: absolute; width: 100%; height: 3px;
            background-color: var(--hub-black); bottom: -6px; left: 0;
            transform: scaleX(0); transform-origin: right;
            transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hub-nav-link:hover::after { transform: scaleX(1); transform-origin: left; }

        .hub-highlight { color: var(--hub-accent-pink); }
        .hub-highlight::after { background-color: var(--hub-accent-pink); }
        .hub-sale { color: red; font-weight: 700; }
        .hub-sale::after { background-color: red; }

        /* --- Instagram Action Button --- */
        .hub-ig-button {
            display: flex; align-items: center; gap: 8px;
            background-color: var(--hub-black); color: var(--hub-white);
            padding: 10px 20px; border-radius: 30px; text-decoration: none;
            font-family: var(--font-ui); font-weight: 700; font-size: 0.85rem;
            text-transform: uppercase; transition: background-color 0.3s ease, transform 0.2s ease;
        }
        .hub-ig-button:hover { background-color: var(--hub-accent-pink); transform: translateY(-2px); }

        /* --- Mobile Elements --- */
        .hub-mobile-toggle {
            display: none; background: transparent; border: none;
            cursor: pointer; flex-direction: column; gap: 5px; z-index: 1002;
        }
        .hub-bar {
            width: 25px; height: 3px; background-color: var(--hub-black);
            transition: 0.3s ease;
        }

        .hub-mobile-menu {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background-color: var(--hub-white); z-index: 1001;
            display: flex; flex-direction: column; justify-content: center;
            padding: 40px; transform: translateX(-100%);
            transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hub-mobile-menu.is-active { transform: translateX(0); }
        .hub-mobile-nav { display: flex; flex-direction: column; gap: 25px; text-align: left; }
        .hub-mobile-link {
            font-family: var(--font-brand); font-size: 2.5rem;
            color: var(--hub-black); text-decoration: none; text-transform: uppercase;
        }
        .hub-mobile-footer { margin-top: 40px; }
        .hub-mobile-ig-btn {
            display: inline-block; background-color: var(--hub-accent-pink);
            color: var(--hub-white); padding: 15px 30px; font-family: var(--font-ui);
            font-weight: 700; text-decoration: none; border-radius: 30px; text-transform: uppercase;
        }

        /* --- Responsive Breakpoints --- */
        @media (max-width: 992px) {
            .hub-desktop-nav, .hub-actions { display: none; }
            .hub-mobile-toggle { display: flex; }
            .hub-nav-wrapper { justify-content: space-between; }
            .hub-brand { position: absolute; left: 50%; transform: translateX(-50%); font-size: 1.8rem; }
            .hub-brand:hover { transform: translateX(-50%); }
        }
    </style>
`;

// 2. Inject the HTML into your placeholder
document.getElementById("header-placeholder").innerHTML = headerHTML;

// 3. Initialize the Interactive Logic (Mobile Menu & Smart Scroll)
(function initHubHeader() {
    const header = document.querySelector('.hub-global-header');
    const toggle = document.querySelector('.hub-mobile-toggle');
    const menu = document.querySelector('.hub-mobile-menu');
    const bars = document.querySelectorAll('.hub-bar');
    let isMenuOpen = false;

    // Mobile Menu Toggle Logic
    if (toggle) {
        toggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            toggle.setAttribute('aria-expanded', isMenuOpen);
            
            if (isMenuOpen) {
                menu.classList.add('is-active');
                // Animate hamburger to X
                bars[0].style.transform = 'translateY(8px) rotate(45deg)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.remove('is-active');
                // Reset hamburger
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Smart Sticky Header Logic (Hides when scrolling down, shows when scrolling up)
    if (header) {
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Do not hide header if mobile menu is open
            if (isMenuOpen) return;

            if (currentScroll <= 0) {
                header.style.transform = 'translateY(0)';
            } else if (currentScroll > lastScroll && currentScroll > 50) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else if (currentScroll < lastScroll) {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }
})();