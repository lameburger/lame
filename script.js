let is_running = false;

if (DeviceMotionEvent) {
    DeviceMotionEvent.requestPermission()
        .then(response => {
            if (response === 'granted') {
                is_running = true;
                console.log('DeviceMotionEvent permission granted.');
            } else {
                console.log('DeviceMotionEvent permission denied.');
            }
        })
        .catch(error => {
            console.error('Error requesting DeviceMotionEvent permission:', error);
        });
} else {
    console.log('DeviceMotionEvent API is not supported on this device.');
}

function getCadence(){
    console.log("JS loaded")
        if (is_running == true) {
            console.log("accelerometer permission granted");
            window.addEventListener('devicemotion', (event) => {
                var headingElement = document.getElementById("accel_val");
                var netAccel = Math.sqrt(event.acceleration.x ** 2 + event.acceleration.y ** 2 + event.acceleration.z ** 2)
                
                window.alert(netAccel)
                // accelReader.innerHTML = netAccel.toString()
                headingElement.textContent = netAccel.toString();
            })
        }
        else{
            accelReader.innerHTML = "JS works!"
        }
}