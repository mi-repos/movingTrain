// script.js
document.addEventListener('DOMContentLoaded', () => {
    const train = document.querySelector('.train');
    let speed = 10; // Default speed in seconds

    // Set train speed
    const setTrainSpeed = (speed) => {
        train.style.animationDuration = `${speed}s`;
    };

    // Example: Adjust speed of the train after 3 seconds
    setTimeout(() => {
        setTrainSpeed(6);  // Make the train move faster after 3 seconds
    }, 3000);
});
