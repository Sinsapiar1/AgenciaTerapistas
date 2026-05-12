/* ============================================
   AGENCIA TERAPISTAS RBT - MAIN JAVASCRIPT
   Professional ABA Therapy Agency Website
   ============================================ */

(function() {
    'use strict';

    /* ============================================
       STATE MANAGEMENT
       ============================================ */
    const state = {
        currentLang: 'en', // Default language: English (CHANGED FROM Spanish)
        menuOpen: false,
        scrolled: false
    };

    /* ============================================
       LANGUAGE TRANSLATIONS
       ============================================ */
    const translations = {
        es: {
            lang: 'es',
            htmlLang: 'es',
            title: 'Agencia de Terapistas RBT | Servicios de Terapia ABA en Florida',
            description: 'Agencia profesional de terapistas RBT especializados en terapia ABA para niños con autismo. Servicios certificados en Miami y todo Florida.',
            ogLocale: 'es_US'
        },
        en: {
            lang: 'en',
            htmlLang: 'en',
            title: 'RBT Therapist Agency | ABA Therapy Services in Florida',
            description: 'Professional RBT therapist agency specialized in ABA therapy for children with autism. Certified services in Miami and all Florida.',
            ogLocale: 'en_US'
        }
    };

    /* ============================================
       DOM ELEMENTS
       ============================================ */
    const elements = {
        navMenu: document.getElementById('nav-menu'),
        navToggle: document.getElementById('nav-toggle'),
        navClose: document.getElementById('nav-close'),
        navOverlay: document.getElementById('nav-overlay'),
        navLinks: document.querySelectorAll('.nav__link'),
        langToggle: document.getElementById('lang-toggle'),
        contactForm: document.getElementById('contact-form'),
        scrollTopBtn: document.getElementById('scroll-top'),
        header: document.getElementById('header')
    };

    /* ============================================
       MOBILE MENU FUNCTIONALITY
       ============================================ */
    function initMobileMenu() {
        function openMenu() {
            elements.navMenu.classList.add('show-menu');
            elements.navToggle.classList.add('active');
            elements.navToggle.setAttribute('aria-expanded', 'true');
            if (elements.navOverlay) elements.navOverlay.classList.add('show');
            document.body.classList.add('menu-open');
            state.menuOpen = true;
        }

        function closeMenu() {
            elements.navMenu.classList.remove('show-menu');
            elements.navToggle.classList.remove('active');
            elements.navToggle.setAttribute('aria-expanded', 'false');
            if (elements.navOverlay) elements.navOverlay.classList.remove('show');
            document.body.classList.remove('menu-open');
            state.menuOpen = false;
        }

        if (elements.navToggle) {
            elements.navToggle.addEventListener('click', () => {
                state.menuOpen ? closeMenu() : openMenu();
            });
            elements.navToggle.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    state.menuOpen ? closeMenu() : openMenu();
                }
            });
        }

        if (elements.navClose) {
            elements.navClose.addEventListener('click', closeMenu);
            elements.navClose.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    closeMenu();
                }
            });
        }

        // Close on overlay click
        if (elements.navOverlay) {
            elements.navOverlay.addEventListener('click', closeMenu);
        }

        // Close when clicking a nav link
        elements.navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && state.menuOpen) {
                closeMenu();
                elements.navToggle.focus();
            }
        });
    }

    /* ============================================
       LANGUAGE TOGGLE FUNCTIONALITY
       ============================================ */
    function initLanguageToggle() {
        // Load saved language preference OR default to English
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
            state.currentLang = savedLang;
        } else {
            // Set English as default and save it
            state.currentLang = 'en';
            localStorage.setItem('preferredLanguage', 'en');
        }
        updateLanguage(state.currentLang);

        // Language toggle click
        if (elements.langToggle) {
            elements.langToggle.addEventListener('click', () => {
                const newLang = state.currentLang === 'es' ? 'en' : 'es';
                state.currentLang = newLang;
                updateLanguage(newLang);
                localStorage.setItem('preferredLanguage', newLang);
            });
        }
    }

    function updateLanguage(lang) {
        // Update button text
        const langText = elements.langToggle.querySelector('.lang-toggle__text');
        if (langText) {
            langText.textContent = lang === 'es' ? 'EN' : 'ES';
        }

        // Update all elements with data-en and data-es attributes
        const translatableElements = document.querySelectorAll('[data-en][data-es]');
        translatableElements.forEach(element => {
            const text = lang === 'es' ? element.getAttribute('data-es') : element.getAttribute('data-en');
            
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'SELECT') {
                // For select elements, handle options
                const options = element.querySelectorAll('option[data-en][data-es]');
                options.forEach(option => {
                    const optionText = lang === 'es' ? option.getAttribute('data-es') : option.getAttribute('data-en');
                    option.textContent = optionText;
                });
            } else {
                element.textContent = text;
            }
        });

        // Update placeholders separately
        const inputsWithPlaceholder = document.querySelectorAll('[data-en-placeholder][data-es-placeholder]');
        inputsWithPlaceholder.forEach(input => {
            const placeholder = lang === 'es' ? 
                input.getAttribute('data-es-placeholder') : 
                input.getAttribute('data-en-placeholder');
            input.placeholder = placeholder;
        });

        // Update select options
        const selectOptions = document.querySelectorAll('option[data-en][data-es]');
        selectOptions.forEach(option => {
            const text = lang === 'es' ? option.getAttribute('data-es') : option.getAttribute('data-en');
            option.textContent = text;
        });

        // Update meta tags
        updateMetaTags(lang);

        // Update HTML lang attribute
        document.documentElement.lang = translations[lang].htmlLang;
    }

    function updateMetaTags(lang) {
        const translation = translations[lang];

        // Update title
        document.title = translation.title;

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', translation.description);
        }

        // Update Open Graph locale
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', translation.ogLocale);
        }

        // Update Open Graph title
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', translation.title);
        }

        // Update Open Graph description
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute('content', translation.description);
        }

        // Update Twitter title
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', translation.title);
        }

        // Update Twitter description
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription) {
            twitterDescription.setAttribute('content', translation.description);
        }
    }

    /* ============================================
       SCROLL HEADER EFFECT
       ============================================ */
    function initScrollHeader() {
        function scrollHeader() {
            if (window.scrollY >= 80) {
                if (!state.scrolled) {
                    elements.header.classList.add('scroll-header');
                    state.scrolled = true;
                }
            } else {
                if (state.scrolled) {
                    elements.header.classList.remove('scroll-header');
                    state.scrolled = false;
                }
            }
        }

        window.addEventListener('scroll', scrollHeader);
        scrollHeader(); // Run on init
    }

    /* ============================================
       SCROLL TO TOP BUTTON
       ============================================ */
    function initScrollToTop() {
        function scrollTop() {
            if (window.scrollY >= 560) {
                elements.scrollTopBtn.classList.add('show-scroll');
            } else {
                elements.scrollTopBtn.classList.remove('show-scroll');
            }
        }

        if (elements.scrollTopBtn) {
            elements.scrollTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });

            window.addEventListener('scroll', scrollTop);
            scrollTop(); // Run on init
        }
    }

    /* ============================================
       SMOOTH SCROLL FOR ANCHOR LINKS
       ============================================ */
    function initSmoothScroll() {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only handle anchor links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const headerHeight = elements.header.offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }

    /* ============================================
       CONTACT FORM HANDLING
       ============================================ */
    function initContactForm() {
        if (!elements.contactForm) return;

        elements.contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(elements.contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                childAge: formData.get('child-age'),
                service: formData.get('service'),
                message: formData.get('message'),
                language: state.currentLang,
                timestamp: new Date().toISOString()
            };

            // Get submit button
            const submitButton = elements.contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            try {
                // Disable button and show loading state
                submitButton.disabled = true;
                submitButton.textContent = state.currentLang === 'es' ? 'Enviando...' : 'Sending...';

                // IMPORTANT: Replace this webhook URL with your actual Make.com webhook
                const webhookUrl = 'https://hook.us2.make.com/rnbh454atbusjt7xquh1e9o77wdy4vc8';
                
                const response = await fetch(webhookUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    // Success
                    showFormMessage('success', 
                        state.currentLang === 'es' 
                            ? '¡Gracias! Su mensaje ha sido enviado. Nos contactaremos dentro de 24 horas.' 
                            : 'Thank you! Your message has been sent. We will contact you within 24 hours.'
                    );
                    elements.contactForm.reset();
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('error',
                    state.currentLang === 'es'
                        ? 'Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos directamente.'
                        : 'There was an error sending your message. Please try again or contact us directly.'
                );
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }

    function showFormMessage(type, message) {
        // Remove any existing messages
        const existingMessage = elements.contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message form-message--${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            grid-column: 1 / -1;
            padding: 1rem;
            border-radius: 0.5rem;
            font-weight: 500;
            text-align: center;
            animation: slideIn 0.3s ease-out;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
        `;

        // Insert before submit button
        const submitButton = elements.contactForm.querySelector('button[type="submit"]');
        elements.contactForm.insertBefore(messageEl, submitButton);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => messageEl.remove(), 300);
        }, 5000);
    }

    /* ============================================
       ANIMATIONS ON SCROLL (Optional Enhancement)
       ============================================ */
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements that should animate
        const animatedElements = document.querySelectorAll(
            '.service-card, .testimonial-card, .feature-item, .why-us__image'
        );

        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }

    /* ============================================
       FORM VALIDATION
       ============================================ */
    function initFormValidation() {
        const inputs = elements.contactForm.querySelectorAll('.form__input, .form__textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                validateInput(input);
            });

            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    validateInput(input);
                }
            });
        });
    }

    function validateInput(input) {
        const value = input.value.trim();
        let isValid = true;

        // Remove previous error
        const existingError = input.parentElement.querySelector('.form__error');
        if (existingError) {
            existingError.remove();
        }
        input.classList.remove('invalid');

        // Validation rules
        if (input.hasAttribute('required') && !value) {
            isValid = false;
            showInputError(input, 
                state.currentLang === 'es' 
                    ? 'Este campo es obligatorio' 
                    : 'This field is required'
            );
        } else if (input.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                showInputError(input,
                    state.currentLang === 'es'
                        ? 'Ingrese un correo electrónico válido'
                        : 'Please enter a valid email address'
                );
            }
        } else if (input.type === 'tel' && value) {
            const phoneRegex = /^[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(value) || value.replace(/\D/g, '').length < 10) {
                isValid = false;
                showInputError(input,
                    state.currentLang === 'es'
                        ? 'Ingrese un número de teléfono válido'
                        : 'Please enter a valid phone number'
                );
            }
        }

        return isValid;
    }

    function showInputError(input, message) {
        input.classList.add('invalid');
        const errorEl = document.createElement('span');
        errorEl.className = 'form__error';
        errorEl.textContent = message;
        errorEl.style.cssText = `
            display: block;
            color: #EF4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `;
        input.parentElement.appendChild(errorEl);
    }

    /* ============================================
       CUSTOM SELECT DROPDOWN
       ============================================ */
    function initCustomSelect() {
        const wrapper   = document.getElementById('service-select');
        const native    = document.getElementById('service');
        if (!wrapper || !native) return;

        const trigger   = wrapper.querySelector('.form__select-trigger');
        const valueSpan = wrapper.querySelector('.form__select-value');
        const dropdown  = wrapper.querySelector('.form__select-dropdown');
        const options   = Array.from(wrapper.querySelectorAll('.form__select-option'));

        function openSelect() {
            wrapper.classList.add('open');
            wrapper.setAttribute('aria-expanded', 'true');
            const current = wrapper.querySelector('.form__select-option.selected') || options[0];
            current.focus();
        }

        function closeSelect() {
            wrapper.classList.remove('open');
            wrapper.setAttribute('aria-expanded', 'false');
        }

        function pickOption(option) {
            const value    = option.dataset.value;
            const textSpan = option.querySelector('.form__select-option-text');

            // Sync hidden native select for form submission
            native.value = value;

            // Update trigger text and its i18n data-attributes so language switching works
            valueSpan.dataset.en = textSpan.dataset.en || textSpan.textContent;
            valueSpan.dataset.es = textSpan.dataset.es || textSpan.textContent;
            valueSpan.textContent = state.currentLang === 'es'
                ? (textSpan.dataset.es || textSpan.textContent)
                : (textSpan.dataset.en || textSpan.textContent);

            // Mark selected state
            options.forEach(o => {
                o.classList.remove('selected');
                o.setAttribute('aria-selected', 'false');
            });
            option.classList.add('selected');
            option.setAttribute('aria-selected', 'true');

            wrapper.classList.add('has-value');
            closeSelect();
            wrapper.focus();
        }

        // Toggle on trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            wrapper.classList.contains('open') ? closeSelect() : openSelect();
        });

        // Option click
        options.forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                pickOption(opt);
            });
        });

        // Keyboard on wrapper
        wrapper.addEventListener('keydown', (e) => {
            const isOpen = wrapper.classList.contains('open');
            const focused = dropdown.querySelector('.form__select-option:focus');
            const idx = focused ? options.indexOf(focused) : -1;

            switch (e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    if (!isOpen) { openSelect(); break; }
                    if (focused) pickOption(focused);
                    break;
                case 'ArrowDown':
                    e.preventDefault();
                    if (!isOpen) { openSelect(); break; }
                    options[Math.min(idx + 1, options.length - 1)].focus();
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    if (!isOpen) break;
                    if (idx > 0) options[idx - 1].focus();
                    break;
                case 'Escape':
                    e.preventDefault();
                    closeSelect();
                    wrapper.focus();
                    break;
                case 'Tab':
                    if (isOpen) closeSelect();
                    break;
            }
        });

        // Keyboard on each option (for Enter/Space while focused)
        options.forEach(opt => {
            opt.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    pickOption(opt);
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!wrapper.contains(e.target)) closeSelect();
        });
    }

    /* ============================================
       PERFORMANCE OPTIMIZATION
       ============================================ */
    function optimizePerformance() {
        // Lazy load images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    /* ============================================
       INITIALIZE ALL FUNCTIONALITY
       ============================================ */
    function init() {
        console.log('🚀 ABA Agencies Miami - Website Initialized');
        
        initMobileMenu();
        initLanguageToggle();
        initScrollHeader();
        initScrollToTop();
        initSmoothScroll();
        initContactForm();
        initFormValidation();
        initCustomSelect();
        initScrollAnimations();
        optimizePerformance();

        // Log current language
        console.log(`📍 Current Language: ${state.currentLang.toUpperCase()}`);
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    /* ============================================
       EXPOSE PUBLIC API (Optional)
       ============================================ */
    window.AgenciaTerapistas = {
        getCurrentLanguage: () => state.currentLang,
        setLanguage: (lang) => {
            if (lang === 'en' || lang === 'es') {
                state.currentLang = lang;
                updateLanguage(lang);
                localStorage.setItem('preferredLanguage', lang);
            }
        }
    };

})();
