document.addEventListener("DOMContentLoaded", () => {
    
    const revealOnScroll = () => {
        const observerOptions = {
            threshold: 0.15, 
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    
                } else {
                    
                    entry.target.classList.remove("active");
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(
            ".card, .section-title, .bio-content, .bio-image-wrapper, .skill, .main-button"
        );

        elements.forEach((el, index) => {
            el.classList.add("reveal-on-scroll");

            const delay = (index % 0.1) * 0.15; 
            el.style.transitionDelay = `${delay}s`;
            
            observer.observe(el);
        });
    };

    const initSmoothScroll = () => {
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    window.scrollTo({
                        top: target.offsetTop - navHeight,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    revealOnScroll();
    initSmoothScroll();
});