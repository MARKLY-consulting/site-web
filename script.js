// Animation au défilement
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fermer le menu mobile en cliquant sur un lien
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Animation au défilement
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const checkScroll = function() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    // Vérifier au chargement et au défilement
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    
    // Animation des barres du graphique
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        bar.style.height = '0%';
        
        setTimeout(() => {
            bar.style.height = value + '%';
        }, 500);
    });
    
    // Bouton "Retour en haut"
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const closeConfirmation = document.getElementById('closeConfirmation');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ici, vous ajouteriez le code pour envoyer le formulaire
            // Pour l'instant, nous simulons juste l'envoi
            
            // Afficher le message de confirmation
            confirmationMessage.style.display = 'flex';
            
            // Réinitialiser le formulaire
            contactForm.reset();
            
            // Fermer le message de confirmation
            closeConfirmation.addEventListener('click', function() {
                confirmationMessage.style.display = 'none';
            });
            
            // Fermer le message en cliquant à l'extérieur
            confirmationMessage.addEventListener('click', function(e) {
                if (e.target === confirmationMessage) {
                    confirmationMessage.style.display = 'none';
                }
            });
        });
    }
    
    // Lisser les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Effet sur les cartes de service au survol
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Effet sur les cartes de tarification au survol
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        if (!card.classList.contains('featured')) {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        }
    });
});
