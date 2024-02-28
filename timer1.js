function updateTimer() {
    // Set the initial countdown date (February 28, 2024 11:40:00)
    var countDownDate = new Date("February 28, 2024 11:40:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the distance between now and the countdown date
        var distance = countDownDate - now;

        // Ensure the countdown does not go negative
        if (distance < 0) {
            clearInterval(x);
            // Update countdown date to 10 days from now
            countDownDate = new Date();
            countDownDate.setDate(countDownDate.getDate() + 10);
            // Restart the timer with the new countdown date
            updateTimer();
            return; // Stop executing further as we've restarted the timer
        }

        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown timer
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
}

// Call the function to start the countdown timer
updateTimer();
