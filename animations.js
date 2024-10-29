
document.getElementById("big_brick").onclick = () => {
    document.getElementById("big_brick").classList.add("active");
    document.getElementById("aura_area").classList.add("active");

    clicks += 1;
    total += (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer ;
    bricks = bricks + (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer ;
    element_bricks.innerText = bricks;

    spawnParticles(event.clientX + window.scrollX, event.clientY + window.scrollY);

    let animation_refresh = setInterval(() => {
        document.getElementById("big_brick").classList.remove("active");
        document.getElementById("aura_area").classList.remove("active");
        clearInterval(animation_refresh);
    }, 200);  
}



document.getElementById("big_brick").onclick = () => {
    document.getElementById("big_brick").classList.add("active");
    document.getElementById("aura_area").classList.add("active");

    // Existing click handling code
    clicks += 1;
    total += (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer;
    bricks = bricks + (clickbrick + buildings/5 + (cement_income + wall_income + House_income + Estate_income + City_income + voivodeship_income + Country_income + Continent_income + Planet_income + system_income + Galaxy_income)*0.15) * clickin_mulitplayer;
    element_bricks.innerText = bricks;






//-----------------------------------------------------------------------------------\\








// Particle spawning
spawnParticles(event.clientX + window.scrollX, event.clientY + window.scrollY);

    let animation_refresh = setInterval(() => {
        document.getElementById("big_brick").classList.remove("active");
        document.getElementById("aura_area").classList.remove("active");
        clearInterval(animation_refresh);
    }, 200);  
}




const clickBrickImages = {
    2: "url('sprites/brick-1.png')",
    4: "url('sprites/brick-2.png')",
    8: "url('sprites/brick-3.png')",
    16: "url('sprites/brick-4.png')",
    64: "url('sprites/brick-5.png')",
    512: "url('sprites/brick-6.png')"
};



// Function to spawn particles
function spawnParticles(x, y) {
    for (let i = 0; i < 1; i++) { // Number of particles to spawn
        let particle = document.createElement("div");
        particle.classList.add("particle");
        if (clickBrickImages[clickbrick]) {
            particle.style.backgroundImage = clickBrickImages[clickbrick];
        }
        document.body.appendChild(particle);
        
        // Set initial position
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        // Apply random velocity
        let velocityX = (Math.random() - 0.5) * 5; // Random horizontal velocity
        let velocityY = (Math.random() - 1) * 5; // Random upward velocity

        // Animate the particle
        animateParticle(particle, velocityX, velocityY);
    }
}

// Function to animate a particle
// Function to animate a particle
function animateParticle(particle, velocityX, velocityY) {
    let gravity = 0.2; // Gravity effect
    let posX = parseFloat(particle.style.left);
    let posY = parseFloat(particle.style.top);
    
    function update() {
        posX += velocityX;
        posY += velocityY;
        velocityY += gravity; // Apply gravity

        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;

        // Remove the particle after it goes off-screen, accounting for scroll position
        if (posY > window.innerHeight + window.scrollY) {
            particle.remove();
        } else {
            requestAnimationFrame(update);
        }
    }
    
    update();
}