// 1. Dynamic Greeting & Date
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    const hours = now.getHours();
    
    let message = "Good Evening";
    if (hours < 12) message = "Good Morning";
    else if (hours < 18) message = "Good Afternoon";

    greetingElement.innerText = `${message}, Welcome to Joy Bakery!`;
    dateElement.innerText = "Today's Date: " + now.toLocaleDateString();
}

// 2. Shopping Cart Counter
let cartCount = 0;
const cartDisplay = document.getElementById('cart-count');
const addButtons = document.querySelectorAll('.add-to-cart');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartDisplay.innerText = cartCount;
        // Small visual feedback
        button.innerText = "Added!";
        setTimeout(() => button.innerText = "Add to Cart", 1000);
    });
});

// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');

themeBtn.addEventListener('click', () => {
    // 1. Toggle the class on the body
    document.body.classList.toggle('night-mode');
    
    // 2. Optional: Change the button icon
    if (document.body.classList.contains('night-mode')) {
        themeBtn.innerText = "☀️"; // Show Sun in Night Mode
    } else {
        themeBtn.innerText = "🌓"; // Show Moon in Blue Mode
    }
});

// Run greeting on load
updateGreeting();
// 4. Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Stop page from refreshing
        
        const email = document.getElementById('email').value;
        const feedback = document.getElementById('form-feedback');

        if (email.includes('@')) {
            feedback.innerText = "Thank you! Your message has been sent.";
            feedback.style.color = "#4CAF50"; // Green for success
            contactForm.reset();
        } else {
            feedback.innerText = "Please enter a valid email address.";
            feedback.style.color = "#ff6b6b"; // Red for error
        }
    });
}
