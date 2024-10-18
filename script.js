const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveHeight = 100;
let waveLength = 0.01;
let waveSpeed = 0.02;
let waveAmplitude = 100;

function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        let wavePoint = Math.sin(i * waveLength + waveSpeed) * waveAmplitude;
        ctx.lineTo(i, canvas.height / 2 + wavePoint);
    }

    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    waveSpeed += 0.02;
}

function animate() {
    drawWaves();
    requestAnimationFrame(animate);
}

animate();

// Add wavy effect to the navigation items
document.querySelectorAll('.wavy-nav-text').forEach(item => {
    item.innerHTML = item.textContent.split('').map((char, idx) => `<span>${char}</span>`).join('');
});

// Change "Stay Safe" to "Welcome" on click and back
const welcomeText = document.getElementById('welcome-text');
const originalText = welcomeText.innerHTML;

// Function to change text to "Welcome" and back to "Stay Safe"
function changeText() {
    // Change the content of the wavy text
    welcomeText.innerHTML = "Welcome"; // Change to "Welcome"
    
    // After 2 seconds, change back to original text
    setTimeout(() => {
        welcomeText.innerHTML = originalText; // Change back to original text
    }, 2000); // Change back after 2 seconds
}

// Add click event to change text when clicked
welcomeText.addEventListener('click', () => {
    changeText();
});

// Automatically change text every 4 seconds
setInterval(() => {
    changeText();
}, 4000); // Changes every 4 seconds (2 seconds "Welcome" + 2 seconds "Stay Safe")
