// ===== ENHANCED INTERACTIONS & UI IMPROVEMENTS =====

(function() {
  'use strict';

  // ===== UTILITY FUNCTIONS =====
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);
  
  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const throttle = (func, limit) => {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };

  // ===== SMOOTH SCROLLING =====
  function initSmoothScroll() {
    const links = $$('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = $(href);
        if (!target) return;
        
        const headerHeight = $('header')?.offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  }

  // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = $$('article, .mv6, .shadow-4, img');
    animatedElements.forEach(el => {
      observer.observe(el);
    });
  }

  // ===== ENHANCED HOVER EFFECTS =====
  function initHoverEffects() {
    // Card hover effects
    const cards = $$('.shadow-4, article');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-4px)';
        card.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
      });
    });

    // Link hover effects
    const links = $$('a:not(.credential):not(.social a)');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.borderBottomColor = '#FFD700';
        link.style.backgroundColor = 'rgba(255, 215, 0, 0.1)';
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.borderBottomColor = 'transparent';
        link.style.backgroundColor = 'transparent';
      });
    });
  }

  // ===== READING PROGRESS BAR =====
  function initReadingProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 0%;
      height: 3px;
      background: linear-gradient(90deg, #FFD700, #FFC700);
      z-index: 1000;
      transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    const updateProgress = throttle(() => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    }, 10);

    window.addEventListener('scroll', updateProgress);
  }

  // ===== ENHANCED IMAGE LOADING =====
  function initImageEnhancements() {
    const images = $$('img');
    
    images.forEach(img => {
      // Lazy loading fallback
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add loading state
      img.addEventListener('load', () => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      });
      
      // Initial state
      img.style.opacity = '0';
      img.style.transform = 'scale(0.95)';
      img.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
  }

  // ===== KEYBOARD NAVIGATION =====
  function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // Skip to main content
      if (e.key === 'Tab' && e.shiftKey && e.altKey) {
        e.preventDefault();
        const main = $('main') || $('.index') || $('body');
        if (main) {
          main.focus();
          main.scrollIntoView({ behavior: 'smooth' });
        }
      }
      
      // Escape key to close any open modals/overlays
      if (e.key === 'Escape') {
        const activeElement = document.activeElement;
        if (activeElement && activeElement.blur) {
          activeElement.blur();
        }
      }
    });
  }

  // ===== PERFORMANCE OPTIMIZATIONS =====
  function initPerformanceOptimizations() {
    // Preload critical resources
    const criticalImages = $$('img[data-preload]');
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.src;
      document.head.appendChild(link);
    });

    // Optimize scroll events
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll-based animations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
  }

  // ===== ACCESSIBILITY ENHANCEMENTS =====
  function initAccessibilityEnhancements() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add main landmark
    const mainContent = $('.index') || $('main') || $('body');
    if (mainContent && !mainContent.id) {
      mainContent.id = 'main';
    }

    // Enhance focus indicators
    const focusableElements = $$('a, button, input, textarea, select, [tabindex]');
    focusableElements.forEach(el => {
      el.addEventListener('focus', () => {
        el.style.outline = '2px solid #FFD700';
        el.style.outlineOffset = '2px';
      });
      
      el.addEventListener('blur', () => {
        el.style.outline = '';
        el.style.outlineOffset = '';
      });
    });
  }

  // ===== THEME PREFERENCES =====
  function initThemePreferences() {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
      document.documentElement.style.setProperty('--transition-fast', '0ms');
      document.documentElement.style.setProperty('--transition-base', '0ms');
      document.documentElement.style.setProperty('--transition-slow', '0ms');
    }

    // Listen for changes
    prefersReducedMotion.addEventListener('change', (e) => {
      if (e.matches) {
        document.documentElement.style.setProperty('--transition-fast', '0ms');
        document.documentElement.style.setProperty('--transition-base', '0ms');
        document.documentElement.style.setProperty('--transition-slow', '0ms');
      } else {
        document.documentElement.style.setProperty('--transition-fast', '150ms ease');
        document.documentElement.style.setProperty('--transition-base', '250ms ease');
        document.documentElement.style.setProperty('--transition-slow', '350ms ease');
      }
    });
  }

  // ===== INITIALIZATION =====
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Initialize all features
    initSmoothScroll();
    initScrollAnimations();
    initHoverEffects();
    initReadingProgress();
    initImageEnhancements();
    initKeyboardNavigation();
    initPerformanceOptimizations();
    initAccessibilityEnhancements();
    initThemePreferences();

    // Add loaded class to body
    document.body.classList.add('loaded');
  }

  // Start initialization
  init();

  // ===== EXPORT FOR TESTING =====
  window.MMaxenceUI = {
    init,
    debounce,
    throttle
  };

})();
