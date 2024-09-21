document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function (e) {
        // Basic client-side validation
        let valid = true;

        if (usernameInput.value.trim() === "") {
            alert("Username is required.");
            valid = false;
        }

        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email.");
            valid = false;
        }

        if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters long.");
            valid = false;
        }

        if (!valid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
