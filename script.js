// Initialize the hero swiper
document.addEventListener('DOMContentLoaded', function() {
    // Hero Swiper Initialization
    const heroSwiper = new Swiper('.heroSwiper', {
        loop: true,
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Category Tabs Functionality
    const categoryTabs = document.querySelectorAll('.category-tab');
    const tabPanes = document.querySelectorAll('.tab-pane');

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            categoryTabs.forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab panes
            tabPanes.forEach(pane => {
                pane.classList.add('hidden');
                pane.classList.remove('active');
            });
            
            // Show the corresponding tab pane
            const tabId = this.getAttribute('data-tab');
            const tabPane = document.getElementById(tabId + '-tab');
            if (tabPane) {
                tabPane.classList.remove('hidden');
                tabPane.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Add to Cart Button Functionality
    const addToCartButtons = document.querySelectorAll('button:nth-child(2)');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Simple animation to acknowledge the action
            this.textContent = 'Added ✓';
            this.classList.add('bg-indigo-50');
            
            setTimeout(() => {
                this.textContent = 'Add to Cart';
                this.classList.remove('bg-indigo-50');
            }, 2000);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}); 