document.addEventListener("DOMContentLoaded", function() {
    
    var hoverSound = new Audio("success bell.mp3");

  
    hoverSound.addEventListener('canplaythrough', function() {
        console.log('Audio loaded successfully.');
    }, false);

    hoverSound.addEventListener('error', function(e) {
        console.error('Failed to load audio:', e);
    }, false);


    var cards = document.querySelectorAll(".card");


    cards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            hoverSound.currentTime = 0; // 
            hoverSound.play().catch(error => {
                console.error('Error playing audio:', error);
            });
        });

        card.addEventListener("mouseleave", function() {
            hoverSound.pause(); 
        });
    });

   
    var modal = document.getElementById("aboutModal");

    var span = document.getElementsByClassName("close")[0];

    
    document.getElementById("about-link").addEventListener("click", function() {
        modal.style.display = "block";
        var message = "This is a class websites page! Explore the websites created by the class.";
        displayMessage(message); 
    });

    
    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    
    function displayMessage(message) {
        var messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.classList.add("message");
        document.body.appendChild(messageDiv);
        setTimeout(function() {
            document.body.removeChild(messageDiv);
        }, 3000); 
    }
});


