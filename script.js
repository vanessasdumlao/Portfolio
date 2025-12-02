// ===== SIDEBAR TOGGLE FOR MOBILE =====
// This function shows/hides the sidebar on mobile devices
function toggleSidebar() {
    // Get the sidebar element
    const sidebar = document.querySelector('.sidebar');
    
    // Toggle the 'active' class
    // If sidebar has 'active' class, it removes it
    // If sidebar doesn't have 'active' class, it adds it
    sidebar.classList.toggle('active');
}

// ===== CLOSE SIDEBAR WHEN CLICKING A LINK (MOBILE) =====
// This makes the mobile experience better
const sidebarLinks = document.querySelectorAll('.sidebar-links a');

// Add click event to each link
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Only close sidebar on mobile (when screen is small)
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.remove('active');
        }
    });
});

// ===== CONTACT FORM HANDLER =====
// Get the form element
const contactForm = document.getElementById('contact-form');

// Listen for form submission
contactForm.addEventListener('submit', function(e) {
    // Prevent the page from refreshing
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // For now, just log to console
    // Later you can connect this to an email service
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    
    // Show success message
    alert('Thanks for your message! I will get back to you soon.');
    
    // Clear the form
    this.reset();
});

// ===== HIGHLIGHT CURRENT SECTION IN SIDEBAR =====
// This shows which section you're currently viewing
window.addEventListener('scroll', () => {
    // Get all sections
    const sections = document.querySelectorAll('section');
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    
    // Get current scroll position
    const scrollPosition = window.scrollY + 100;
    
    // Check which section is in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // If this section is in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            sidebarLinks.forEach(link => {
                link.style.backgroundColor = '';
            });
            
            // Add active style to current section's link
            const currentLink = document.querySelector(`.sidebar-links a[href="#${sectionId}"]`);
            if (currentLink) {
                currentLink.style.backgroundColor = '#34495e';
            }
        }
    });
});

// ===== SIMPLE TYPING EFFECT FOR WELCOME MESSAGE =====
// This makes your name appear letter by letter
window.addEventListener('load', () => {
    const heading = document.querySelector('#home h1');
    const text = heading.textContent;
    heading.textContent = '';
    
    let index = 0;
    
    // Type one letter at a time
    function type() {
        if (index < text.length) {
            heading.textContent += text[index];
            index++;
            setTimeout(type, 100); // Wait 100ms between letters
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
});

// ===== LOG MESSAGE WHEN PAGE LOADS =====
console.log('Portfolio website loaded successfully!');
console.log('Click the menu button on mobile to see the sidebar.');
