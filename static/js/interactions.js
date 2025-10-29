// Delightful Interactions - Minimal & Elegant
(function() {
  'use strict';

  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Delightful Interactions loaded!');
    initPageTransitions();
    initReadingProgress();
    initScrollAnimations();
    initSmoothScrolling();
    initLibraryEnhancements();
    initIndexEnhancements();
  });

  // Page Transition System
  function initPageTransitions() {
    const main = document.querySelector('main');
    if (main) {
      main.classList.add('page-transition');
      
      // Add loaded class after a short delay for smooth entrance
      setTimeout(() => {
        main.classList.add('loaded');
      }, 50);
    }
  }

  // Reading Progress Bar
  function initReadingProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    document.body.prepend(progressBar);

    // Update progress on scroll
    function updateProgress() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Throttled scroll listener
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll);
    updateProgress(); // Initial call
  }

  // Scroll-triggered animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.principle-card, .book-item, .qualification-item').forEach(el => {
      observer.observe(el);
    });
  }

  // Smooth scrolling for anchor links
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Library page enhancements
  function initLibraryEnhancements() {
    const bookItems = document.querySelectorAll('.book-item, .post-card');
    console.log(`📚 Found ${bookItems.length} book items for enhancement`);
    
    bookItems.forEach((item, index) => {
      // Staggered animation delay
      item.style.animationDelay = `${index * 0.1}s`;
      
      // Add hover sound effect (visual feedback)
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.02)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Index page specific enhancements
  function initIndexEnhancements() {
    // Animate principle cards on scroll
    const principleCards = document.querySelectorAll('.principle-card');
    principleCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });

    // Add interactive feedback to qualification items
    const qualificationItems = document.querySelectorAll('.qualification-item');
    qualificationItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });

    // Enhanced mark highlighting
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
      mark.addEventListener('mouseenter', function() {
        this.style.backgroundSize = '100% 100%';
      });
    });
  }

  // Utility function for debouncing
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Handle window resize
  window.addEventListener('resize', debounce(() => {
    // Recalculate any layout-dependent features
    const progressBar = document.getElementById('reading-progress');
    if (progressBar) {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      progressBar.style.width = `${Math.min(scrollPercent, 100)}%`;
    }
  }, 250));

  // Add loading states for better UX
  function addLoadingState(element) {
    element.classList.add('loading');
    setTimeout(() => {
      element.classList.remove('loading');
    }, 1000);
  }

  // Expose utility functions globally if needed
  window.Interactions = {
    addLoadingState,
    debounce
  };

})();
