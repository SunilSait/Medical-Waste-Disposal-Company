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
        { href: 'about.html', label: 'About' },
        { href: 'services.html', label: 'Services' },
        { href: 'compliance.html', label: 'Compliance' },
        { href: 'contact.html', label: 'Contact' },
    ];

    const isDark = document.documentElement.classList.contains('dark');
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
    const isDashboardActive = currentPage === 'dashboard.html';

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
                <a href="dashboard.html" class="btn btn-nav-dashboard ${isDashboardActive ? 'active' : ''}">
                    Dashboard
                </a>
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
                <a href="dashboard.html" class="btn btn-secondary w-full" style="margin-bottom:8px;">
                    Dashboard
                </a>
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
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="compliance.html">Compliance</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4 class="footer-col-title">Resources</h4>
                    <ul class="footer-links">
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
    if (document.body.classList.contains('auth-page') || 
        document.body.classList.contains('fullscreen-page') ||
        document.querySelector('.dashboard-layout') ||
        document.querySelector('.sidebar') ||
        document.getElementById('dashboard-sidebar')) return;
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
    const toggleBtn = document.querySelector('.sidebar-toggle');
    if (sidebar) {
        const isOpen = sidebar.classList.toggle('open');
        if (toggleBtn) {
            toggleBtn.classList.toggle('open', isOpen);
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
            }
            toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            toggleBtn.setAttribute('title', isOpen ? 'Close sidebar' : 'Open sidebar');
        }
    }
}

// Close sidebar on click outside or clicking the backdrop
document.addEventListener('click', (e) => {
    const sidebar = document.getElementById('dashboard-sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    if (sidebar && sidebar.classList.contains('open')) {
        if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('open');
            if (toggleBtn) {
                toggleBtn.classList.remove('open');
                const icon = toggleBtn.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-bars';
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('title', 'Open sidebar');
            }
        }
    }
});

/* ─── TESTIMONIAL SLIDER (Home 2) ─────────────────── */
function initTestimonialSlider() {
    const slider = document.getElementById('testimonial-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.testimonial-slide');
    const dots = slider.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');

    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const intervalTime = 5000; // Switch 5 seconds once

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === current);
        });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === current);
            dot.setAttribute('aria-current', idx === current ? 'true' : 'false');
        });
    }

    function nextSlide() {
        goToSlide(current + 1);
    }

    function prevSlide() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(nextSlide, intervalTime);
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            startTimer();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            startTimer();
        });
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startTimer();
        });
    });

    // Pause on hover, resume on mouseleave
    slider.addEventListener('mouseenter', stopTimer);
    slider.addEventListener('mouseleave', startTimer);

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopTimer();
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 40) {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            if (diff > 0) {
                isRTL ? prevSlide() : nextSlide();
            } else {
                isRTL ? nextSlide() : prevSlide();
            }
        }
        startTimer();
    }, { passive: true });

    // Initial start
    startTimer();
}

/* ─── HERO SLIDER (Home 1 — Next-Gen Modern) ────────── */
function initHeroSlider() {
    const track = document.getElementById('hero-slides-track');
    if (!track) return;

    const slides = track.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('#hero-dots .hero-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const heroSection = document.getElementById('hero');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const interval = 5000; // Switch 5 seconds once

    function restartProgressBar(activeIdx) {
        dots.forEach((dot, idx) => {
            const fill = dot.querySelector('.nav-tab-progress-fill');
            if (fill) {
                fill.style.animation = 'none';
                void fill.offsetWidth; // force reflow
                if (idx === activeIdx) {
                    fill.style.animation = `hero1Progress ${interval}ms linear`;
                }
            }
        });
    }

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => {
            const isActive = idx === current;
            s.classList.toggle('active', isActive);
            s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        dots.forEach((d, idx) => {
            const isActive = idx === current;
            d.classList.toggle('active', isActive);
            d.setAttribute('aria-current', isActive ? 'true' : 'false');
        });

        restartProgressBar(current);
    }

    function next() {
        goToSlide(current + 1);
    }

    function prev() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(next, interval);
        const activeFill = document.querySelector('#hero-dots .hero-dot.active .nav-tab-progress-fill');
        if (activeFill) {
            activeFill.style.animationPlayState = 'running';
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        const activeFill = document.querySelector('#hero-dots .hero-dot.active .nav-tab-progress-fill');
        if (activeFill) {
            activeFill.style.animationPlayState = 'paused';
        }
    }

    dots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
            goToSlide(idx);
            startTimer();
        });
    });

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            isRTL ? next() : prev();
            startTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            isRTL ? prev() : next();
            startTimer();
        });
    }

    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', () => {
            restartProgressBar(current);
            startTimer();
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        heroSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopTimer();
        }, { passive: true });

        heroSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 40) {
                const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                if (diff > 0) {
                    isRTL ? prev() : next();
                } else {
                    isRTL ? next() : prev();
                }
            }
            restartProgressBar(current);
            startTimer();
        }, { passive: true });
    }

    goToSlide(0);
    startTimer();
}

/* ─── HERO 2 SLIDER (Home 2 — 5s Auto-Rotation) ──── */
function initHero2Slider() {
    const track = document.getElementById('hero2-slides-track');
    if (!track) return;

    const slides = track.querySelectorAll('.hero2-slide');
    const indicators = document.querySelectorAll('.hero2-indicator');
    const prevBtn = document.getElementById('hero2-prev');
    const nextBtn = document.getElementById('hero2-next');
    const heroSection = document.getElementById('hero2');
    if (!slides.length) return;

    let current = 0;
    let timer = null;
    const interval = 5000; // Switch 5 seconds once

    function restartIndicatorAnimation(activeIdx) {
        indicators.forEach((ind, idx) => {
            const fill = ind.querySelector('.hero2-indicator-fill');
            if (fill) {
                fill.style.animation = 'none';
                void fill.offsetWidth; // force reflow
                if (idx === activeIdx) {
                    fill.style.animation = `hero2Progress ${interval}ms linear`;
                }
            }
        });
    }

    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        current = index;

        slides.forEach((s, idx) => {
            const isActive = idx === current;
            s.classList.toggle('active', isActive);
            s.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        indicators.forEach((d, idx) => {
            const isActive = idx === current;
            d.classList.toggle('active', isActive);
            d.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        restartIndicatorAnimation(current);
    }

    function next() {
        goToSlide(current + 1);
    }

    function prev() {
        goToSlide(current - 1);
    }

    function startTimer() {
        stopTimer();
        timer = setInterval(next, interval);
        const activeFill = document.querySelector('.hero2-indicator.active .hero2-indicator-fill');
        if (activeFill) {
            activeFill.style.animationPlayState = 'running';
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        const activeFill = document.querySelector('.hero2-indicator.active .hero2-indicator-fill');
        if (activeFill) {
            activeFill.style.animationPlayState = 'paused';
        }
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            isRTL ? next() : prev();
            startTimer();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
            isRTL ? prev() : next();
            startTimer();
        });
    }

    indicators.forEach((ind, idx) => {
        ind.addEventListener('click', () => {
            goToSlide(idx);
            startTimer();
        });
    });

    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopTimer);
        heroSection.addEventListener('mouseleave', () => {
            // Restart progress fill for remaining/fresh 5s
            restartIndicatorAnimation(current);
            startTimer();
        });

        // Touch swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;
        heroSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            stopTimer();
        }, { passive: true });

        heroSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 40) {
                const isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                if (diff > 0) {
                    isRTL ? prev() : next();
                } else {
                    isRTL ? next() : prev();
                }
            }
            restartIndicatorAnimation(current);
            startTimer();
        }, { passive: true });
    }

    // Initialize first slide and start auto-switch every 5 seconds
    goToSlide(0);
    startTimer();
}

/* ─── HERO 2: MEDICAL CONSTELLATION & TELEMETRY CANVAS ─── */
function initHero2CanvasAnimation() {
    const canvas = document.getElementById('hero2-network-canvas');
    if (!canvas) return;

    const heroSection = document.getElementById('hero2');
    if (!heroSection) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;
    let animationFrameId = null;
    let isVisible = true;

    // Track mouse coordinates for subtle interactive node connection
    const mouse = { x: null, y: null, maxDist: 130 };

    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
        mouse.x = null;
        mouse.y = null;
    }

    heroSection.addEventListener('mousemove', handleMouseMove);
    heroSection.addEventListener('mouseleave', handleMouseLeave);

    // Particle class representing medical data nodes / telemetry units
    class NodeParticle {
        constructor() {
            this.reset(true);
        }

        reset(initial = false) {
            this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
            this.y = Math.random() * height;
            // Smooth ambient drift
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.8 + 1.2;

            const colors = ['rgba(45, 212, 191, ', 'rgba(56, 189, 248, ', 'rgba(20, 184, 166, ', 'rgba(240, 253, 250, '];
            this.baseColor = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.45 + 0.35;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce gently off boundaries
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Mouse proximity gentle reaction
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.hypot(dx, dy);
                if (dist < mouse.maxDist) {
                    const force = (mouse.maxDist - dist) / mouse.maxDist;
                    this.x -= (dx / dist) * force * 1.5;
                    this.y -= (dy / dist) * force * 1.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.baseColor + this.alpha + ')';
            ctx.fill();

            // Luminous halo
            ctx.shadowBlur = 6;
            ctx.shadowColor = this.baseColor + '0.6)';
        }
    }

    let particles = [];

    function resize() {
        const rect = heroSection.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);

        // Density scaled to canvas area (~35 - 50 particles max for top performance)
        const count = Math.min(Math.max(Math.floor((width * height) / 18000), 25), 48);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new NodeParticle());
        }
    }

    window.addEventListener('resize', resize);
    resize();

    // Render loop
    const maxLineDist = 110;

    function render() {
        if (!isVisible) return;

        ctx.clearRect(0, 0, width, height);

        // Draw node connections
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);

                if (dist < maxLineDist) {
                    const lineAlpha = (1 - dist / maxLineDist) * 0.22;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(45, 212, 191, ${lineAlpha})`;
                    ctx.lineWidth = 0.85;
                    ctx.shadowBlur = 0;
                    ctx.stroke();
                }
            }

            // Connection line to mouse pointer
            if (mouse.x !== null && mouse.y !== null) {
                const mdx = mouse.x - particles[i].x;
                const mdy = mouse.y - particles[i].y;
                const mdist = Math.hypot(mdx, mdy);
                if (mdist < mouse.maxDist) {
                    const mAlpha = (1 - mdist / mouse.maxDist) * 0.38;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
                    ctx.lineWidth = 1;
                    ctx.shadowBlur = 4;
                    ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(render);
    }

    // Optimization: pause animation loop when hero is off-screen
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!isVisible) {
                        isVisible = true;
                        render();
                    }
                } else {
                    isVisible = false;
                    cancelAnimationFrame(animationFrameId);
                }
            });
        }, { threshold: 0.05 });
        observer.observe(heroSection);
    }

    render();
}

/* ─── WASTE CALCULATOR (HOME 1) ──────────────────── */
function initWasteCalculator() {
    const calcSection = document.getElementById('waste-calculator');
    if (!calcSection) return;

    const typeBtns = calcSection.querySelectorAll('.calc-type-btn');
    const chipBtns = calcSection.querySelectorAll('.calc-chip-btn');
    const sharpsCheck = document.getElementById('calc-stream-sharps');
    const pharmaCheck = document.getElementById('calc-stream-pharma');
    const pathoCheck = document.getElementById('calc-stream-patho');

    const planTitle = document.getElementById('calc-plan-title');
    const planDesc = document.getElementById('calc-plan-desc');
    const cadenceEl = document.getElementById('calc-cadence');
    const c1El = document.getElementById('calc-c1');
    const c2El = document.getElementById('calc-c2');
    const c3El = document.getElementById('calc-c3');
    const quoteBtn = document.getElementById('calc-quote-btn');

    let currentType = 'clinic';
    let currentVolume = 'small';

    const dataConfigs = {
        clinic: {
            title: 'Private Practice & Clinic Package',
            desc: 'Tailored for outpatient doctor offices, pediatric, and urgent care clinics.',
            small: { cadence: 'Monthly', c1: '2x 5.4-Qt Sharps Containers', c2: '2x 28-Gallon Red Biohazard Totes' },
            medium: { cadence: 'Bi-Weekly', c1: '4x 5.4-Qt Sharps Containers', c2: '4x 28-Gallon Red Biohazard Totes' },
            large: { cadence: 'Weekly', c1: '8x 5.4-Qt Sharps Containers', c2: '6x 44-Gallon Biohazard Rolling Carts' },
            enterprise: { cadence: 'Twice Weekly', c1: '16x 5.4-Qt Sharps Containers', c2: '10x 95-Gallon Rolling Toter Carts' },
        },
        dental: {
            title: 'Dental Surgery & Practice Setup',
            desc: 'Includes specialized mercury amalgam separators, carpule sharps, and lead foil bins.',
            small: { cadence: 'Bi-Monthly', c1: '2x 2-Gallon Needle Sharps Boxes', c2: '1x Amalgam Waste Recycling Bucket' },
            medium: { cadence: 'Monthly', c1: '4x 2-Gallon Needle Sharps Boxes', c2: '2x Amalgam Recycling Buckets' },
            large: { cadence: 'Bi-Weekly', c1: '8x Multi-Room Sharps Units', c2: '4x Amalgam & Lead Foil Bins' },
            enterprise: { cadence: 'Weekly Scheduled', c1: '15x Point-of-Use Sharps Units', c2: '6x Amalgam Separators & Red Totes' },
        },
        hospital: {
            title: 'Hospital & Surgical Center Protocol',
            desc: 'Comprehensive multi-department regulatory coverage with daily on-call emergency dispatch.',
            small: { cadence: 'Weekly', c1: '10x 18-Gallon Reusable Sharps Carts', c2: '6x 44-Gallon Red Biohazard Drums' },
            medium: { cadence: 'Twice Weekly', c1: '20x 18-Gallon Reusable Sharps Carts', c2: '12x 44-Gallon Red Biohazard Drums' },
            large: { cadence: 'Every Alternate Day', c1: '40x 18-Gallon Reusable Sharps Carts', c2: '20x 95-Gallon Rolling Biohazard Totes' },
            enterprise: { cadence: 'Daily Scheduled + 24/7 On-Call', c1: '80+ Reusable Sharps Vaults', c2: 'Bulk 95-Gallon Rolling Toter Fleets' },
        },
        lab: {
            title: 'Clinical Diagnostic & Pathology Lab Program',
            desc: 'Specialized chemical specimen, culture neutralization, and hazardous bio-liquid destruction.',
            small: { cadence: 'Bi-Weekly', c1: '3x Laboratory Pipette & Sharps Bins', c2: '2x Specimen Bio-Incineration Barrels' },
            medium: { cadence: 'Weekly', c1: '6x Laboratory Pipette & Sharps Bins', c2: '4x Specimen Bio-Incineration Barrels' },
            large: { cadence: 'Twice Weekly', c1: '12x High-Volume Pipette Bins', c2: '8x Specimen Incineration Barrels' },
            enterprise: { cadence: 'Daily Bulk Collection', c1: '25x High-Volume Pipette Bins', c2: '15x Hazardous Chemical Neutralization Drums' },
        }
    };

    function updateCalculator() {
        const config = dataConfigs[currentType] || dataConfigs.clinic;
        const volData = config[currentVolume] || config.small;

        if (planTitle) planTitle.textContent = config.title;
        if (planDesc) planDesc.textContent = config.desc;
        if (cadenceEl) cadenceEl.textContent = volData.cadence;
        if (c1El) c1El.textContent = volData.c1;
        if (c2El) c2El.textContent = volData.c2;

        if (c3El) {
            const hasPharma = pharmaCheck && pharmaCheck.checked;
            const hasPatho = pathoCheck && pathoCheck.checked;
            if (hasPharma && hasPatho) {
                c3El.textContent = '1x DEA Locked Rx Safe + 1x Pathological Incineration Drum';
            } else if (hasPharma) {
                c3El.textContent = '1x DEA-Compliant Controlled Substance Rx Lockbox';
            } else if (hasPatho) {
                c3El.textContent = '1x Specialized Pathological Incineration Drum';
            } else {
                c3El.textContent = 'Standard OSHA Bio-Manifest & Segregation Supplies';
            }
        }

        if (quoteBtn) {
            quoteBtn.href = `contact.html?type=${encodeURIComponent(currentType)}&vol=${encodeURIComponent(currentVolume)}`;
        }
    }

    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.getAttribute('data-type') || 'clinic';
            updateCalculator();
        });
    });

    chipBtns.forEach(chip => {
        chip.addEventListener('click', () => {
            chipBtns.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            currentVolume = chip.getAttribute('data-volume') || 'small';
            updateCalculator();
        });
    });

    [sharpsCheck, pharmaCheck, pathoCheck].forEach(chk => {
        if (chk) chk.addEventListener('change', updateCalculator);
    });

    updateCalculator();
}

/* ─── SMART PORTAL TABS (HOME 2) ─────────────────── */
function initSmartPortalTabs() {
    const portalSection = document.getElementById('smart-portal');
    if (!portalSection) return;

    const tabBtns = portalSection.querySelectorAll('.portal-tab-btn');
    const screens = portalSection.querySelectorAll('.portal-screen');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            screens.forEach(screen => {
                if (screen.id === `tab-${targetTab}`) {
                    screen.classList.add('active');
                } else {
                    screen.classList.remove('active');
                }
            });
        });
    });
}

/* ─── LOGOUT CONFIRMATION MODAL ───────────────────── */
function ensureLogoutModal() {
    let modalBackdrop = document.getElementById('logoutModalBackdrop');
    if (!modalBackdrop) {
        modalBackdrop = document.createElement('div');
        modalBackdrop.id = 'logoutModalBackdrop';
        modalBackdrop.className = 'logout-modal-backdrop';
        modalBackdrop.innerHTML = `
            <div class="logout-modal-card" role="dialog" aria-modal="true" aria-labelledby="logoutModalTitle">
                <div class="logout-modal-icon">
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                <h3 class="logout-modal-title" id="logoutModalTitle">Confirm Sign Out</h3>
                <p class="logout-modal-desc">Are you sure you want to log out of your SafeDispose account? You will need to sign in again to access waste manifests and schedule pickups.</p>
                <div class="logout-modal-actions">
                    <button type="button" class="logout-modal-btn logout-btn-cancel" onclick="closeLogoutModal()">
                        <i class="fa-solid fa-xmark"></i> Cancel
                    </button>
                    <a href="login.html" class="logout-modal-btn logout-btn-confirm" id="confirmLogoutLink">
                        <i class="fa-solid fa-right-from-bracket"></i> Log Out
                    </a>
                </div>
            </div>
        `;
        document.body.appendChild(modalBackdrop);

        // Close on backdrop click
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closeLogoutModal();
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
                closeLogoutModal();
            }
        });
    }
    return modalBackdrop;
}

function openLogoutModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    const modal = ensureLogoutModal();
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLogoutModal() {
    const modal = document.getElementById('logoutModalBackdrop');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function initLogoutConfirmation() {
    ensureLogoutModal();
    const logoutBtns = document.querySelectorAll('.sidebar-logout');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openLogoutModal(e);
        });
    });
}

// Global exposure
window.openLogoutModal = openLogoutModal;
window.closeLogoutModal = closeLogoutModal;
window.confirmLogout = openLogoutModal;

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
    initTestimonialSlider();
    initHeroSlider();
    initHero2Slider();
    initHero2CanvasAnimation();
    initWasteCalculator();
    initSmartPortalTabs();
    initLogoutConfirmation();
});




