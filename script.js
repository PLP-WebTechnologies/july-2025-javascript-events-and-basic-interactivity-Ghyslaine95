

        // Part 1: JavaScript Event Handling
        
        // Click event
        document.getElementById('click-box').addEventListener('click', function() {
            alert('You clicked the box!');
            document.getElementById('event-output').innerHTML = '<p>Click event detected - alert shown</p>';
        });
        
        // Mouseover event
        const mouseoverBox = document.getElementById('mouseover-box');
        mouseoverBox.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#4e54c8';
            this.style.color = 'white';
            document.getElementById('event-output').innerHTML = '<p>Mouseover event detected - color changed</p>';
        });
        
        mouseoverBox.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
            document.getElementById('event-output').innerHTML = '<p>Mouseout event detected - color restored</p>';
        });
        
        // Double click event
        const doubleClickBox = document.querySelectorAll('.event-item')[2];
        doubleClickBox.addEventListener('dblclick', function() {
            this.style.display = this.style.display === 'none' ? 'block' : 'none';
            document.getElementById('event-output').innerHTML = '<p>Double click event detected - visibility toggled</p>';
        });
        
        // Key press event
        const keyBox = document.querySelectorAll('.event-item')[3];
        keyBox.addEventListener('keydown', function(e) {
            this.innerHTML = `<h3>Key Pressed: ${e.key}</h3><p>Key code: ${e.keyCode}</p>`;
            document.getElementById('event-output').innerHTML = `<p>Keydown event detected - ${e.key} pressed</p>`;
        });
        
        // Part 2: Interactive Elements
        
        // Dark/Light mode toggle
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        darkModeToggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
        });
        
        // Counter
        let count = 0;
        const counterValue = document.getElementById('counter-value');
        
        document.getElementById('increment-btn').addEventListener('click', function() {
            count++;
            counterValue.textContent = count;
        });
        
        document.getElementById('decrement-btn').addEventListener('click', function() {
            if (count > 0) {
                count--;
                counterValue.textContent = count;
            }
        });
        
        // FAQ Section
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isOpen = answer.classList.contains('open');
                
                // Close all answers
                document.querySelectorAll('.faq-answer').forEach(ans => {
                    ans.classList.remove('open');
                });
                
                document.querySelectorAll('.faq-question span:last-child').forEach(icon => {
                    icon.textContent = '+';
                });
                
                // Open clicked answer if it was closed
                if (!isOpen) {
                    answer.classList.add('open');
                    this.querySelector('span:last-child').textContent = '-';
                }
            });
        });
        
        // Tabbed Interface
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab content
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.style.display = 'none';
                });
                
                // Show the selected tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).style.display = 'block';
            });
        });
        
        // Part 3: Form Validation
        
        const form = document.getElementById('validation-form');
        
        // Name validation
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('name-error');
        
        nameInput.addEventListener('input', function() {
            if (this.value.length < 2) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                nameError.style.display = 'block';
            } else {
                this.classList.remove('invalid');
                this.classList.add('valid');
                nameError.style.display = 'none';
            }
        });
        
        // Email validation
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        emailInput.addEventListener('input', function() {
            if (!emailRegex.test(this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                emailError.style.display = 'block';
            } else {
                this.classList.remove('invalid');
                this.classList.add('valid');
                emailError.style.display = 'none';
            }
        });
        
        // Password validation
        const passwordInput = document.getElementById('password');
        const passwordError = document.getElementById('password-error');
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
        
        passwordInput.addEventListener('input', function() {
            if (!passwordRegex.test(this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                passwordError.style.display = 'block';
            } else {
                this.classList.remove('invalid');
                this.classList.add('valid');
                passwordError.style.display = 'none';
            }
        });
        
        // Phone validation
        const phoneInput = document.getElementById('phone');
        const phoneError = document.getElementById('phone-error');
        const phoneRegex = /^\d{10}$/;
        
        phoneInput.addEventListener('input', function() {
            if (!phoneRegex.test(this.value)) {
                this.classList.add('invalid');
                this.classList.remove('valid');
                phoneError.style.display = 'block';
            } else {
                this.classList.remove('invalid');
                this.classList.add('valid');
                phoneError.style.display = 'none';
            }
        });
        
        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Validate all fields
            if (nameInput.value.length < 2) {
                nameInput.classList.add('invalid');
                nameError.style.display = 'block';
                isValid = false;
            }
            
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('invalid');
                emailError.style.display = 'block';
                isValid = false;
            }
            
            if (!passwordRegex.test(passwordInput.value)) {
                passwordInput.classList.add('invalid');
                passwordError.style.display = 'block';
                isValid = false;
            }
            
            if (!phoneRegex.test(phoneInput.value)) {
                phoneInput.classList.add('invalid');
                phoneError.style.display = 'block';
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                document.getElementById('form-success').style.display = 'block';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    form.reset();
                    document.querySelectorAll('input').forEach(input => {
                        input.classList.remove('valid');
                    });
                    document.getElementById('form-success').style.display = 'none';
                }, 2000);
            }
        });
    