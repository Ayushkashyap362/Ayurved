document.addEventListener("DOMContentLoaded", function() {
    // Function to fade in elements
    function fadeIn(element) {
        element.style.opacity = 0;
        let opacity = 0;
        let timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += 0.1;
        }, 50);
    }

    // Get all result elements
    // const results = document.querySelectorAll('.result');

    // Fade in each result element
    results.forEach(result => {
        fadeIn(result);
    });

    // Function to highlight hovered result
    function highlightResult(event) {
        const result = event.target.closest('.result');
        if (result) {
            result.classList.add('highlight');
        }
    }

    // Function to remove highlight from result
    function removeHighlight(event) {
        const result = event.target.closest('.result');
        if (result) {
            result.classList.remove('highlight');
        }
    }

    // Add event listeners for result highlighting
    results.forEach(result => {
        result.addEventListener('mouseenter', highlightResult);
        result.addEventListener('mouseleave', removeHighlight);
    });
});
