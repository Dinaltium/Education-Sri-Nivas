let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for the slideshow
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls for the slideshow
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card"); // Assuming "card" is the class for slides
  let dots = document.getElementsByClassName("dot"); // Assuming "dot" is the class for indicators
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove active class from all dots
  }

  slides[slideIndex - 1].style.display = "block"; // Show the current slide
  dots[slideIndex - 1].className += " active"; // Set the current dot as active
}

// ================================================
// Fetching data from ESP32 and warning system
// ================================================

// URL of the ESP32 that provides JSON data
const esp32Url = "http://192.168.43.36/json"; // Updated endpoint

// Temperature and gas thresholds
const TEMP_THRESHOLD = 32;  // Example threshold for temperature in °C
const GAS_THRESHOLD = 100;  // Example threshold for gas resistance in KOhms

// Function to fetch sensor data from the ESP32
async function fetchSensorData() {
  try {
    const response = await fetch(esp32Url, {
      method: 'GET',
      mode: 'cors' // Ensure CORS is enabled
    });
    const data = await response.json();

    const insideTemp = data.temperature;
    const gasResistance = data.gas_resistance;

    // Update the webpage (assume class 'temperature' exists in the HTML)
    document.querySelector(".temperature").innerHTML = insideTemp + "°C";

    // Check for warnings
    if (insideTemp > TEMP_THRESHOLD || gasResistance < GAS_THRESHOLD) {
      triggerWarning(insideTemp, gasResistance);
    } else {
      // If no warning, reset warnings text
      document.querySelector(".warnings").innerHTML = "No warnings.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to trigger warning
function triggerWarning(temperature, gasResistance) {
  let warningMessage = "Warning! ";

  if (temperature > TEMP_THRESHOLD) {
    warningMessage += `High temperature detected: ${temperature}°C. `;
  }
  if (gasResistance < GAS_THRESHOLD) {
    warningMessage += `Low gas resistance: ${gasResistance} KOhms. `;
  }

  // Display the warning in the warning section
  const warningSection = document.querySelector(".warnings");
  warningSection.innerHTML = warningMessage;

  // Play a sound alert
  const alertSound = new Audio("../Assets/alert-sound.mp3"); // Use any alert sound file here
  alertSound.play();
}

// Fetch sensor data periodically (every 5 seconds)
setInterval(fetchSensorData, 5000);
