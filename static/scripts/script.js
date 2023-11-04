// JavaScript to show/hide the genre select dropdown
const genreDropdown = document.getElementById('genreDropdown');
const genreSelect = document.getElementById('genreSelect');

genreDropdown.addEventListener('click', function () {
    genreSelect.classList.toggle('d-none');
});

genreSelect.addEventListener('change', function () {
    const selectedGenre = genreSelect.value;
    genreDropdown.textContent = selectedGenre;
    genreSelect.classList.add('d-none');
});

function getCadence(){
    console.log("JS loaded")
    DeviceMotionEvent.requestPermission().then(response => {
        if (response == 'granted') {
            console.log("accelerometer permission granted");
            window.addEventListener('devicemotion', (event) => {
                var headingElement = document.getElementById("accel_value");
                var netAccel = Math.sqrt(event.acceleration.x ** 2 + event.acceleration.y ** 2 + event.acceleration.z ** 2)
                
                let parsed = parseFloat(netAccel.toFixed(3));

                setInterval(function() {
                    var newValue = parsed;
                    updateChart(newValue);
                  }, 1000);

                headingElement.textContent = parsed.toString();
            })
        }
        else{
            headingElement.textContent = "Permission not granted"
        }
    });
}

// Update the chart with new data
function updateChart(newValue) {
    // Add a new data point to the chart
    myChart.data.datasets[0].data.push(newValue);
  
    // If you want to add labels for each data point (e.g., timestamps)
    myChart.data.labels.push(new Date().toLocaleTimeString());
  
    // Limit the number of data points displayed to a certain number (optional)
    var maxDataPoints = 20; // Adjust as needed
    if (myChart.data.datasets[0].data.length > maxDataPoints) {
      myChart.data.datasets[0].data.shift();
      myChart.data.labels.shift();
    }
  
    // Update the chart
    myChart.update();
  }
  