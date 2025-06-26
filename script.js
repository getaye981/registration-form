document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const passwordInput = form.querySelector('input[placeholder="Enter your password"]');
    const confirmPasswordInput = form.querySelector('input[placeholder="Confirm your password"]');
    const emailInput = form.querySelector('input[placeholder="Enter your email"]');
    const phoneInput = form.querySelector('input[placeholder="Enter your number"]');
    const messageDiv = document.getElementById("message");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const password = passwordInput.value.trim();
      const confirmPassword = confirmPasswordInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
  
      // Reset messages
      messageDiv.textContent = ""; 
      messageDiv.style.color = "red"; 
  
      // ✅ Validate Email
      const emailPattern = /^[^\\s@]+@[^\\s@]+\.[^\\s@]+$/;
      if (!emailPattern.test(email)) {
        messageDiv.textContent = "Invalid email address. Enter a valid email like example@domain.com.";
        return;
      }
  
      // ✅ Validate Phone Number
      const phonePattern = /^[0-9]{10,13}$/;
      if (!phonePattern.test(phone)) {
        messageDiv.textContent = "Invalid phone number! Must be digits only and between 10 and 13 digits.";
        return;
      }
  
      // ✅ Validate Strong Password
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
      if (!passwordPattern.test(password)) {
        messageDiv.textContent = "Password must be at least 8 chars long and include an uppercase letter, a lowercase letter, a number, and a special character.";
        return;
      }
  
      // ✅ Validate Password Match
      if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match! Please try again.";
        return;
      }
  
      // ✅ All validations passed
      messageDiv.textContent = "Registration successful!"; 
      messageDiv.style.color = "green"; 
      form.reset();
    });
  });
  