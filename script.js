// Custom cursor - Enhanced with smooth, subtle hover effects
        const cursor = document.querySelector('.cursor');
        const interactiveElements = document.querySelectorAll('a, .interactive, .project-visual, .cert-link, .skill-tag, .tech-category, .certification-card');

        // Hide default cursor on all elements
        document.body.style.cursor = 'none';
        document.documentElement.style.cursor = 'none';

        // Apply cursor: none to all clickable elements
        const allClickableElements = document.querySelectorAll('a, button, input, textarea, select, .interactive, .project-visual, .cert-link, .skill-tag, .tech-category, .certification-card, [onclick], [role="button"]');
        allClickableElements.forEach(el => {
            el.style.cursor = 'none';
        });

        // Smooth cursor movement
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Smooth hover effects with smaller scale
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        // Ensure cursor stays visible and custom on window focus
        window.addEventListener('focus', () => {
            document.body.style.cursor = 'none';
            document.documentElement.style.cursor = 'none';
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
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

        // Reveal animations
        const revealElements = document.querySelectorAll('.reveal, .project, .experience-item');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero');
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
        
        // Add certifications to the reveal animation observer
        document.addEventListener('DOMContentLoaded', function() {
        const certificationCards = document.querySelectorAll('.certification-card');
    
        // Stagger animation for certification cards
        certificationCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            revealObserver.observe(card);
        });

        // Add hover effect for certification cards
        certificationCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    });

        document.addEventListener('DOMContentLoaded', function() {
        const techCategories = document.querySelectorAll('.tech-category');

        // Stagger animation for tech category cards
        techCategories.forEach((category, index) => {
            category.style.transitionDelay = `${index * 0.1}s`;
            revealObserver.observe(category);
        });

        // Add hover effect for tech category cards
        techCategories.forEach(category => {
            category.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            category.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add individual skill tag hover effects
        const skillTags = document.querySelectorAll('.skill-tag');
        skillTags.forEach(tag => {
            tag.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            tag.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
    
        // Project interaction
        document.querySelectorAll('.project-visual').forEach(visual => {
            visual.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        });

        // Disable cursor on mobile and small screens
        if (window.innerWidth <= 1024) {
            cursor.style.display = 'none';
            document.body.style.cursor = 'auto';
        }

        // Handle window resize for cursor
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 1024) {
                cursor.style.display = 'none';
                document.body.style.cursor = 'auto';
            } else {
                cursor.style.display = 'block';
                document.body.style.cursor = 'none';
            }
        });