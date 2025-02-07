// Selectors
const navbarMenu = document.querySelector(".navbar .links");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hideMenuBtn = navbarMenu?.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup?.querySelector(".close-btn");
const signupLoginLinks = formPopup?.querySelectorAll(".bottom-link a");
const signupForm = document.querySelector(".form-popup .signup");
const loginForm = document.querySelector(".form-popup .login");
const loginSubmitButton = document.querySelector(".login button[type='submit']");
const signupSubmitButton = document.querySelector(".signup button[type='submit']");

// Show or toggle the mobile menu
if (hamburgerBtn && navbarMenu) {
    hamburgerBtn.addEventListener("click", () => {
        navbarMenu.classList.toggle("show-menu");
    });
}

// Hide the mobile menu
if (hideMenuBtn && hamburgerBtn) {
    hideMenuBtn.addEventListener("click", () => {
        navbarMenu.classList.remove("show-menu");
    });
}

// Show the login popup
if (showPopupBtn) {
    showPopupBtn.addEventListener("click", () => {
        document.body.classList.toggle("show-popup");
    });
}

// Hide the login popup
if (hidePopupBtn && showPopupBtn) {
    hidePopupBtn.addEventListener("click", () => {
        document.body.classList.remove("show-popup");
    });
}

// Show or hide the signup form
if (signupLoginLinks) {
    signupLoginLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            if (formPopup) {
                const showSignup = link.id === "signup-link";
                formPopup.classList.toggle("show-signup", showSignup);
            }
        });
    });
}

// Handle login form submission
if (loginSubmitButton) {
    loginSubmitButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        document.body.classList.remove("show-popup"); // Close the popup
    });
}

// Handle signup form submission
if (signupSubmitButton) {
    signupSubmitButton.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form from refreshing the page
        formPopup.classList.remove("show-signup"); // Switch back to login form
    });
}
