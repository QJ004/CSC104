// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Hogwarts Tutoring Services!");

    // Get all subject items
    const subjectItems = document.querySelectorAll('.subjects ul li');
    const subjectDetails = document.querySelector('.subject-details p');

    // Add event listener for each subject item
    subjectItems.forEach(item => {
        item.addEventListener('click', function () {
            const details = this.getAttribute('data-details'); // Get the subject details from the data attribute
            subjectDetails.innerText = details; // Update the subject details section
        });
    });

    // Example: Add an alert when a professor card is clicked
    const professorCards = document.querySelectorAll('.professor-card');
    professorCards.forEach(card => {
        card.addEventListener('click', function () {
            alert("You clicked on " + this.querySelector('h3').textContent);
        });
    });

    // Show and hide form on sign-up button click
    const signUpButtons = document.querySelectorAll('.sign-up');
    signUpButtons.forEach(button => {
        button.addEventListener('click', function () {
            const form = this.nextElementSibling; // Get the form right after the button
            form.style.display = form.style.display === 'none' ? 'block' : 'none'; // Toggle form visibility
        });
    });

    // Handle form submission
    const forms = document.querySelectorAll('.signup-form');
    forms.forEach(form => {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting

            const professorName = this.parentElement.querySelector('h3').innerText; // Get professor name
            const date = this.querySelector('#date').value; // Get selected date
            const time = this.querySelector('#time').value; // Get selected time

            // Example submission handling
            alert(`You signed up for tutoring with ${professorName} on ${date} at ${time}!`);
            
            // Reset form after submission
            this.reset();
            this.style.display = 'none'; // Hide the form again after submission
        });
    });

    // External Calendar Integration (Optional)
    // Example: You could link this to a third-party calendar API here
    // Add your calendar API logic here if needed.
});
