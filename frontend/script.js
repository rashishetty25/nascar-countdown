const countdownElement = document.getElementById('timer');
const nextRaceDate = new Date("2024-04-01T04:30:00").getTime(); // Set your race date and time

function updateCountdown() {
    const now = new Date().getTime();
    const distance = nextRaceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    if (distance < 0) {
        clearInterval(updateInterval);
        countdownElement.innerHTML = "The race has started!";
    }
}

// Update the countdown every second
const updateInterval = setInterval(updateCountdown, 1000);