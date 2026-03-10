const navSlide = () => {
    const burger = document.querySelector('#burger');
    const nav = document.querySelector('#nav-links');
    const navLinks = document.querySelectorAll('#nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(l => l.style.animation = '');
        });
    });
}

// Navbar scroll effect
const navbarScroll = () => {
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.style.padding = '5px 0';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.padding = '0';
        }
    });
}

// Simple reveal animation on scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.dish-card, .about-text, .chef-text, .about-image, .chef-image');
    
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(30px)';
        reveal.style.transition = 'all 0.8s ease-out';
        observer.observe(reveal);
    });
}

// Testimonial Slider
const testimonialSlider = () => {
    const items = document.querySelectorAll('.testimonial-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let interval;

    const showTestimonial = (index) => {
        items.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        items[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    };

    const nextTestimonial = () => {
        let nextIndex = (currentIndex + 1) % items.length;
        showTestimonial(nextIndex);
    };

    const startInterval = () => {
        interval = setInterval(nextTestimonial, 4000);
    };

    const stopInterval = () => {
        clearInterval(interval);
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-index'));
            showTestimonial(index);
            stopInterval();
            startInterval();
        });
    });

    if (items.length > 0) {
        startInterval();
    }
}

// Facebook Popup Logic
const facebookPopup = () => {
    const popup = document.querySelector('#facebook-popup');
    const closeBtn = document.querySelector('#btn-close');
    const closeX = document.querySelector('#close-popup-x');
    const fbBtn = document.querySelector('#btn-facebook');

    if (!popup) return;

    // Random delay between 5 and 7 seconds
    const randomDelay = Math.floor(Math.random() * (7000 - 5000 + 1)) + 5000;

    setTimeout(() => {
        // Check if popup was already closed in this session (optional, but good practice)
        if (!sessionStorage.getItem('popupShown')) {
            popup.classList.add('show');
        }
    }, randomDelay);

    const closePopup = () => {
        popup.classList.remove('show');
        sessionStorage.setItem('popupShown', 'true');
    };

    closeBtn.addEventListener('click', closePopup);
    closeX.addEventListener('click', closePopup);
    fbBtn.addEventListener('click', closePopup);

    // Close on outside click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    navSlide();
    navbarScroll();
    revealOnScroll();
    testimonialSlider();
    facebookPopup();
});

// Add Keyframes for Nav Links via JS
const style = document.createElement('style');
style.innerHTML = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
`;
document.head.appendChild(style);
