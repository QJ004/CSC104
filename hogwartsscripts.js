document.addEventListener('DOMContentLoaded', function () {
    console.log("Welcome to Hogwarts Tutoring Services!");

    // Example: Add an alert when a professor card is clicked
    const professorCards = document.querySelectorAll('.professor');
    professorCards.forEach(card => {
        card.addEventListener('click', function () {
            alert("You clicked on " + this.querySelector('h3').textContent);
        });
    });

    // Example: Button click for more details
    const detailButtons = document.querySelectorAll('.sign-up');
    detailButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert("You signed up for tutoring with " + this.parentElement.querySelector('h3').textContent);
        });
    });
});
