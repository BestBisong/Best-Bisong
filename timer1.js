function updateTimer() {
            // Set the initial countdown date
            var countDownDate = new Date();
            countDownDate.setDate(countDownDate.getDate() + 10); // 10 days from now

            // Update the countdown every 1 second
            var x = setInterval(function() {
                // Get the current date and time
                var now = new Date().getTime();

                // Calculate the distance between now and the countdown date
                var distance = countDownDate.getTime() - now;

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

                // If the countdown is over, reset countdown date after 10 days
                if (distance < 0) {
                    clearInterval(x);
                    countDownDate.setDate(countDownDate.getDate() + 10); // 10 days from now
                    updateTimer(); // Restart the timer
                }
            }, 1000);
        }

        // Call the function to start the countdown timer
        updateTimer();
