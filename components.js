/* ═══════════════════════════════════════════════════
   MEDICAL WASTE DISPOSAL — SHARED COMPONENTS
   ═══════════════════════════════════════════════════ */
'use strict';

/* ─── Font Awesome Monochrome Icons ──────────────── */
const ICONS = {
    sun: '<i class="fa-solid fa-sun"></i>',
    moon: '<i class="fa-solid fa-moon"></i>',
    menu: '<i class="fa-solid fa-bars"></i>',
    x: '<i class="fa-solid fa-xmark"></i>',
    arrowRight: '<i class="fa-solid fa-arrow-right"></i>',
    arrowUp: '<i class="fa-solid fa-arrow-up"></i>',
    star: '<i class="fa-solid fa-star"></i>',
    check: '<i class="fa-solid fa-check"></i>',
    eye: '<i class="fa-solid fa-eye"></i>',
    eyeOff: '<i class="fa-solid fa-eye-slash"></i>',
    mapPin: '<i class="fa-solid fa-location-dot"></i>',
    phone: '<i class="fa-solid fa-phone"></i>',
    mail: '<i class="fa-solid fa-envelope"></i>',
    clock: '<i class="fa-regular fa-clock"></i>',
    facebook: '<i class="fa-brands fa-facebook-f"></i>',
    instagram: '<i class="fa-brands fa-instagram"></i>',
    youtube: '<i class="fa-brands fa-youtube"></i>',
    twitter: '<i class="fa-brands fa-x-twitter"></i>',
    linkedin: '<i class="fa-brands fa-linkedin-in"></i>',
    shield: '<i class="fa-solid fa-shield-halved"></i>',
    biohazard: '<i class="fa-solid fa-biohazard"></i>',
    truck: '<i class="fa-solid fa-truck"></i>',
    certificate: '<i class="fa-solid fa-certificate"></i>',
    calendar: '<i class="fa-solid fa-calendar-days"></i>',
    recycle: '<i class="fa-solid fa-recycle"></i>',
    leaf: '<i class="fa-solid fa-leaf"></i>',
    building: '<i class="fa-solid fa-building"></i>',
    users: '<i class="fa-solid fa-users"></i>',
    award: '<i class="fa-solid fa-award"></i>',
    handshake: '<i class="fa-solid fa-handshake"></i>',
    chartLine: '<i class="fa-solid fa-chart-line"></i>',
    clipboardCheck: '<i class="fa-solid fa-clipboard-check"></i>',
    flask: '<i class="fa-solid fa-flask"></i>',
    syringe: '<i class="fa-solid fa-syringe"></i>',
    pills: '<i class="fa-solid fa-pills"></i>',
    microscope: '<i class="fa-solid fa-microscope"></i>',
    userShield: '<i class="fa-solid fa-user-shield"></i>',
    headset: '<i class="fa-solid fa-headset"></i>',
    chevronDown: '<i class="fa-solid fa-chevron-down"></i>',
    fileContract: '<i class="fa-solid fa-file-contract"></i>',
    hospitalUser: '<i class="fa-solid fa-hospital-user"></i>',
    bell: '<i class="fa-solid fa-bell"></i>',
    gear: '<i class="fa-solid fa-gear"></i>',
    signOut: '<i class="fa-solid fa-right-from-bracket"></i>',
    dashboard: '<i class="fa-solid fa-gauge-high"></i>',
    fileLines: '<i class="fa-solid fa-file-lines"></i>',
    creditCard: '<i class="fa-solid fa-credit-card"></i>',
    circleUser: '<i class="fa-solid fa-circle-user"></i>',
    boxArchive: '<i class="fa-solid fa-box-archive"></i>',
    calendarPlus: '<i class="fa-solid fa-calendar-plus"></i>',
    trendUp: '<i class="fa-solid fa-arrow-trend-up"></i>',
    trendDown: '<i class="fa-solid fa-arrow-trend-down"></i>',
    globe: '<i class="fa-solid fa-globe"></i>',
    target: '<i class="fa-solid fa-bullseye"></i>',
    heart: '<i class="fa-solid fa-heart"></i>',
    rocket: '<i class="fa-solid fa-rocket"></i>',
    bolt: '<i class="fa-solid fa-bolt"></i>',
};

/* ─── Brand Logo SVG ─────────────────────────────── */
const LOGO_SVG = `<svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient id="logoBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0F766E"/>
            <stop offset="100%" stop-color="#14B8A6"/>
        </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" fill="url(#logoBg)"/>
    <path d="M50 22 L50 78 M28 50 L72 50" stroke="#FFFFFF" stroke-width="9" stroke-linecap="round"/>
    <path d="M32 28 L50 18 L68 28" stroke="#99F6E4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.8"/>
    <circle cx="50" cy="50" r="32" stroke="#99F6E4" stroke-width="2" fill="none" opacity="0.3"/>
</svg>`;

/* ─── Social Login SVGs ──────────────────────────── */
const GOOGLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>`;

const APPLE_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>`;

const FACEBOOK_LOGIN_SVG = `<svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`;

/* ─── THEME & DIRECTION ──────────────────────────── */
(function initThemeDir() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('mwd_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('mwd_dir') === 'rtl') html.setAttribute('dir', 'rtl');
})();

function toggleTheme(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    html.classList.toggle('dark');
    localStorage.setItem('mwd_theme', html.classList.contains('dark') ? 'dark' : 'light');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
}

function updateThemeIcon(el) {
    if (!el) return;
    const isDark = document.documentElement.classList.contains('dark');
    el.innerHTML = isDark ? ICONS.sun : ICONS.moon;
}

function toggleDir(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const html = document.documentElement;
    const isRTL = html.getAttribute('dir') === 'rtl';
    html.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    localStorage.setItem('mwd_dir', isRTL ? 'ltr' : 'rtl');
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = isRTL ? 'LTR' : 'RTL';
    });
}

/* ─── PASSWORD TOGGLE ────────────────────────────── */
function togglePasswordVisibility(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const iconWrap = (btn && btn.querySelector) ? (btn.querySelector('.pw-icon') || btn) : btn;
    if (iconWrap) {
        iconWrap.innerHTML = isPassword ? ICONS.eyeOff : ICONS.eye;
    }
}

/* ─── AUTH PAGE HELPERS ──────────────────────────── */
function initAuthPage() {
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('mwd_theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) html.classList.add('dark');
    if (localStorage.getItem('mwd_dir') === 'rtl') html.setAttribute('dir', 'rtl');
    document.querySelectorAll('.theme-icon-wrap').forEach(updateThemeIcon);
    document.querySelectorAll('.dir-label').forEach(el => {
        el.textContent = html.getAttribute('dir') === 'rtl' ? 'RTL' : 'LTR';
    });
}

/* ─── NAVBAR ─────────────────────────────────────── */
function buildNavbar() {
    const el = document.getElementById('navbar-placeholder') || document.getElementById('main-nav');
    if (!el) return;
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = [
        { href: 'index.html', label: 'Home' },
        { href: 'home2.html', label: 'Home 2' },
        { href: 'services.html', label: 'Services' },
        { href: 'compliance.html', label: 'Compliance' },
        { href: 'about.html', label: 'About' },
        { href: 'contact.html', label: 'Contact' },
        { href: 'pricing.html', label: 'Pricing' },
        { href: 'dashboard.html', label: 'Dashboard' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const navLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const mobileLinksHTML = links.map(l => {
        const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
        return `<a href="${l.href}" class="mob-link ${isActive ? 'active' : ''}">${l.label}</a>`;
    }).join('');

    const nav = document.createElement('div');
    nav.innerHTML = `
    <header class="navbar" id="navbar">
        <div class="nav-inner">
            <a href="index.html" class="nav-logo" aria-label="Home">
                ${LOGO_SVG}
                <div class="nav-logo-text">
                    <span class="brand-top">MEDICAL WASTE</span>
                    <span class="brand-bottom">SafeDispose</span>
                </div>
            </a>

            <nav class="nav-links" aria-label="Main navigation">
                ${navLinksHTML}
            </nav>

            <div class="nav-actions">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
                <a href="login.html" class="btn btn-primary btn-sm">Sign In</a>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu(event)" aria-label="Toggle navigation menu">
                    <span class="mobile-menu-icon">${ICONS.menu}</span>
                </button>
            </div>
        </div>

        <div class="mobile-backdrop" id="mobile-backdrop" onclick="toggleMobileMenu(event)"></div>

        <div class="mobile-menu" id="mobile-menu">
            ${mobileLinksHTML}
            <div class="mob-actions">
                <a href="login.html" class="btn btn-primary w-full">Sign In</a>
            </div>
            <div class="mob-toggles">
                <button onclick="toggleDir(event)" class="nav-icon-btn" title="Toggle Direction" aria-label="Toggle direction">
                    <span class="dir-label" style="font-size:0.625rem;font-weight:600;">${isRTL ? 'LTR' : 'RTL'}</span>
                </button>
                <button onclick="toggleTheme(event)" class="nav-icon-btn" title="Toggle Theme" aria-label="Toggle dark mode">
                    <span class="theme-icon-wrap">${isDark ? ICONS.sun : ICONS.moon}</span>
                </button>
            </div>
        </div>
    </header>
    <div class="navbar-spacer"></div>`;

    nav.querySelectorAll('.mob-link').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            const backdrop = document.getElementById('mobile-backdrop');
            if (menu) menu.classList.remove('open');
            if (backdrop) backdrop.classList.remove('open');
            document.body.classList.remove('nav-open');
            document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        });
    });

    el.replaceWith(nav);
}

function toggleMobileMenu(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    if (!menu) return;

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
        document.body.classList.remove('nav-open');
    } else {
        menu.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.x);
        document.body.classList.add('nav-open');
    }
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('mobile-backdrop');
    const btn = document.querySelector('.mobile-menu-btn');
    if (!menu || !menu.classList.contains('open')) return;
    if (btn && (btn === e.target || btn.contains(e.target))) return;
    if (menu.contains(e.target)) return;
    menu.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('nav-open');
    document.querySelectorAll('.mobile-menu-icon').forEach(icon => icon.innerHTML = ICONS.menu);
});

/* ─── FOOTER ─────────────────────────────────────── */
function buildFooter() {
    const el = document.getElementById('footer-placeholder') || document.getElementById('main-footer');
    if (!el) return;
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.id = 'site-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="index.html" class="nav-logo footer-logo" aria-label="Home">
                        ${LOGO_SVG}
                        <div class="nav-logo-text">
                            <span class="brand-top">MEDICAL WASTE</span>
                            <span class="brand-bottom">SafeDispose</span>
                        </div>
                    </a>
                    <p>Trusted medical waste disposal services ensuring regulatory compliance and environmental safety for healthcare facilities nationwide.</p>
                    <div class="footer-socials">
                        <a href="#" class="footer-social-link" aria-label="Facebook">${ICONS.facebook}</a>
                        <a href="#" class="footer-social-link" aria-label="LinkedIn">${ICONS.linkedin}</a>
                        <a href="#" class="footer-social-link" aria-label="Twitter">${ICONS.twitter}</a>
                        <a href="#" class="footer-social-link" aria-label="YouTube">${ICONS.youtube}</a>
                    </div>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="home2.html">Home 2</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="compliance.html">Compliance</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">Resources</h4>
                    <ul class="footer-links">
                        <li><a href="pricing.html">Pricing Plans</a></li>
                        <li><a href="login.html">Client Sign In</a></li>
                        <li><a href="signup.html">Create Account</a></li>
                        <li><a href="coming-soon.html">Careers</a></li>
                        <li><a href="404.html">404 Page</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <div class="footer-newsletter-card">
                        <h4 class="footer-newsletter-title">Stay Informed</h4>
                        <p class="footer-newsletter-desc">Get regulatory updates, compliance tips, and industry news delivered to your inbox.</p>
                        <form onsubmit="event.preventDefault(); alert('Subscribed successfully!'); this.reset();" class="footer-newsletter-form">
                            <input type="email" placeholder="your@email.com" class="footer-newsletter-input" required>
                            <button type="submit" class="footer-newsletter-btn">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; ${new Date().getFullYear()} SafeDispose Medical Waste. All rights reserved.</p>
                <div class="footer-bottom-links">
                    <a href="coming-soon.html">Privacy Policy</a>
                    <a href="coming-soon.html">Terms of Service</a>
                    <a href="coming-soon.html">Cookie Settings</a>
                </div>
            </div>
        </div>
    `;
    el.replaceWith(footer);
}

/* ─── BACK TO TOP ─────────────────────────────────── */
function buildBackToTop() {
    if (document.body.classList.contains('auth-page') || document.body.classList.contains('fullscreen-page')) return;
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.id = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = ICONS.arrowUp;
    btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
}

/* ─── SCROLL ANIMATIONS ──────────────────────────── */
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-up, .fade-in, .scale-in, .slide-left, .slide-right').forEach(el => {
        observer.observe(el);
    });
}

/* ─── HEADER SCROLL ────────────────────────────────── */
function initHeaderScroll() {
    const header = document.getElementById('navbar');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 60);
    });
}

/* ─── COUNTDOWN TIMER (COMING SOON) ───────────────── */
function initCountdown() {
    const target = new Date();
    target.setDate(target.getDate() + 30);

    function update() {
        const now = new Date();
        const diff = target - now;
        if (diff <= 0) return;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        const dEl = document.getElementById('cd-days');
        const hEl = document.getElementById('cd-hours');
        const mEl = document.getElementById('cd-mins');
        const sEl = document.getElementById('cd-secs');

        if (dEl) dEl.textContent = String(days).padStart(2, '0');
        if (hEl) hEl.textContent = String(hours).padStart(2, '0');
        if (mEl) mEl.textContent = String(mins).padStart(2, '0');
        if (sEl) sEl.textContent = String(secs).padStart(2, '0');
    }

    update();
    setInterval(update, 1000);
}

/* ─── FAQ ACCORDION ───────────────────────────────── */
function initFaqAccordion() {
    document.addEventListener('click', (e) => {
        const questionBtn = e.target.closest('.faq-question');
        if (!questionBtn) return;
        const item = questionBtn.closest('.faq-item');
        if (!item) return;
        const parent = item.parentElement;

        const wasActive = item.classList.contains('active');
        if (parent) {
            parent.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
        }
        if (!wasActive) {
            item.classList.add('active');
        }
    });
}

/* ─── COUNTER ANIMATION ──────────────────────────── */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.count);
                const suffix = el.dataset.suffix || '';
                const duration = 2000;
                const start = performance.now();

                function animate(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
                    if (progress < 1) requestAnimationFrame(animate);
                }
                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

/* ─── DASHBOARD SIDEBAR TOGGLE ───────────────────── */
function toggleSidebar() {
    const sidebar = document.getElementById('dashboard-sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

/* ─── INIT ALL ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();
    buildFooter();
    buildBackToTop();
    initScrollAnimations();
    initHeaderScroll();
    initCountdown();
    initFaqAccordion();
    initCounterAnimation();
});
