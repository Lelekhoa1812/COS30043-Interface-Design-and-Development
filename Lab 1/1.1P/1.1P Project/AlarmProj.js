document.getElementById('playButton').addEventListener('click', function() {
    const timeInput = document.getElementById('timeInput').value;
    const parts = timeInput.split(':');
    let hours = parseInt(parts[0]);
    let minutes = parseInt(parts[1]);
    let seconds = parseInt(parts[2]);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert('Invalid time format. Please enter time in HH:MM:SS format.');
        return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    const clock = document.getElementById('clock');
    const message = document.getElementById('message');

    message.style.display = 'none';

    const countdownInterval = setInterval(() => {
        if (remainingSeconds <= 0) {
            clearInterval(countdownInterval);
            clock.textContent = '00:00:00';
            message.style.display = 'block';
            return;
        }

        const hoursLeft = Math.floor(remainingSeconds / 3600);
        const minutesLeft = Math.floor((remainingSeconds % 3600) / 60);
        const secondsLeft = remainingSeconds % 60;

        clock.textContent = `${padZero(hoursLeft)}:${padZero(minutesLeft)}:${padZero(secondsLeft)}`;
        remainingSeconds--;
    }, 1000);
});

function padZero(num) {
    return num.toString().padStart(2, '0');
}
