function loadParticles(id) {
    particlesJS(id, {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#ffffff" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": false },
            "size": { "value": 3, "random": true },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" }
        },
        "interactivity": {
            "detect_on": "canvas", // Ensure interaction is tracked on the particle layer
            "events": {
                "onhover": { 
                    "enable": true, 
                    "mode": "grab" // Particles will 'grab' the mouse with lines
                },
                "onclick": { 
                    "enable": true, 
                    "mode": "push" // Adds more particles on click
                },
                "resize": true
            },
            "modes": {
                "grab": { 
                    "distance": 200, 
                    "line_linked": { "opacity": 1 } 
                },
                "bubble": { 
                    "distance": 200, 
                    "size": 6, 
                    "duration": 0.3, 
                    "opacity": 1, 
                    "speed": 3 
                },
                "repulse": { "distance": 200, "duration": 0.4 },
                "push": { "particles_nb": 2 }
            }
        },
        "retina_detect": true
    });
}

// Re-initialize for your sections
loadParticles('particles-header');
loadParticles('particles-skills');
loadParticles('particles-footer');