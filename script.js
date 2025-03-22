// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;
    
    // Also update year for other language versions
    const yearElements = document.querySelectorAll('.current-year-en, .current-year-sq');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const language = this.getAttribute('data-lang');
            switchLanguage(language);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    function switchLanguage(lang) {
        // Hide all language elements
        const allLangElements = document.querySelectorAll('.mk, .en, .sq');
        allLangElements.forEach(el => {
            if (el.tagName === 'LI') {
                el.style.display = 'none';
            } else {
                el.style.display = 'none';
            }
        });
        
        // Show only the selected language elements
        const selectedLangElements = document.querySelectorAll('.' + lang);
        selectedLangElements.forEach(el => {
            if (el.tagName === 'LI') {
                el.style.display = 'list-item';
            } else {
                el.style.display = 'block';
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Save language preference to localStorage
        localStorage.setItem('preferredLanguage', lang);
    }
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        switchLanguage(savedLanguage);
        
        // Update active button
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLanguage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
    
    // Add smooth scrolling for navigation
    // Add animation to sections when they come into view
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
