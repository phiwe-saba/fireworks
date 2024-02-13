document.addEventListener("DOMContentLoaded", function() {
    setTimeout(createFirework, 1000); // Start creating fireworks after 1 second
  });
  
  function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.classList.add(`firework-${Math.ceil(Math.random() * 5)}`); // Assign random color class
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(firework);
  
    // Create sparkles
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      sparkle.style.left = `${Math.random() * 20 - 10}px`; // Adjust the sparkle positions
      sparkle.style.top = `${Math.random() * 20 - 10}px`; // Adjust the sparkle positions
      firework.appendChild(sparkle);
    }
    
    // Remove the firework after animation
    firework.addEventListener("animationend", function() {
      firework.remove();
    });
    
    setTimeout(createFirework, Math.random() * 200); // Create more fireworks randomly
  }
  