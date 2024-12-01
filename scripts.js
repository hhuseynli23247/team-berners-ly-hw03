    // Draw a single polygon
    function drawPolygon(context, x, y, radius, sides, angle, color) {
        context.beginPath();
        context.fillStyle = color;
        context.strokeStyle = "black";
        context.lineWidth = 0.5;

        for (let i = 0; i <= sides; i++) {
            let theta = (Math.PI * 10 / sides) * i + angle;
            let px = x + radius * Math.cos(theta);
            let py = y + radius * Math.sin(theta);
            if (i === 0) context.moveTo(px, py);
            else context.lineTo(px, py);
        }
        context.closePath();
        context.fill();
        context.stroke();
    }

    // Draw multiple polygons arranged in a circular pattern
    function drawCircularPattern(context, centerX, centerY, layers, baseRadius, sides) {
        let colors = ["#FF0000", "#0000FF", "#00FF00", "#800080", "#FFFF00"];
        for (let layer = 0; layer < layers; layer++) {
            let radius = baseRadius + layer * 20; // Increase radius for each layer
            let polygons = 35 + layer; // More polygons in outer layers
            for (let i = 0; i < polygons; i++) {
                let angle = (Math.PI * 2 / polygons) * i;
                let x = centerX + radius * Math.cos(angle);
                let y = centerY + radius * Math.sin(angle);
                let color = colors[layer % colors.length];
                drawPolygon(context, x, y, 30, sides + layer, angle, color);
            }
        }
    }

    // Draw overlapping circles
    function drawOverlappingCircles(context, centerX, centerY, layers, baseRadius) {
        context.globalAlpha = 0.3;
        for (let layer = 0; layer < layers; layer++) {
            let radius = baseRadius + layer * 40; // Increase radius for each layer
            let color = `hsl(${(layer * 36) % 360}, 80%, 50%)`; // Dynamic colors
            context.beginPath();
            context.arc(centerX, centerY, radius, 0, Math.PI * 2);
            context.fillStyle = color;
            context.fill();
        }
        context.globalAlpha = 1.0;
    }

    // Initialize and draw on canvas
    window.onload = function () {
        const canvas = document.getElementById('artCanvas');
        const context = canvas.getContext('2d');

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Draw shapes
        drawOverlappingCircles(context, centerX, centerY, 5, 50); // Add overlapping circles
        drawCircularPattern(context, centerX, centerY, 5, 50, 5); // Add polygon pattern
    };

    const team = document.getElementsByClassName("team-name")[0];
if (team){
    let nameRevealed = false;
    team.addEventListener("mouseover", () => {
    if (!nameRevealed){
        team.innerHTML += " (Team 20)";
        nameRevealed = true;
    }
    });
}

// Hour of Code carousel
let slideIndex = 1;

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (slides && dots){
        if (slides.length === 0) {return}
        // Loop back to the first slide if index exceeds the length
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Remove the "active" class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // Show the current slide and highlight the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }   
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);