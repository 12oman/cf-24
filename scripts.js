document.addEventListener("DOMContentLoaded", function() {
    // Get the audio element
    var hoverSound = new Audio("success bell.mp3");

    // Get all image cards
    var cards = document.querySelectorAll(".card");

    // Add event listeners to each image card
    cards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0; // Reset the audio to the beginning
            hoverSound.play(); // Play the audio when hovering over the image card
        });

        card.addEventListener("mouseleave", function() {
            hoverSound.pause(); // Pause the audio when mouse leaves the image card
        });
    });
});

