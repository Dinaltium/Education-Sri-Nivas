// Slideshow functionality
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
  let slides = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// ===================================================
// Fetching data from ESP32 and warning system
// ===================================================
const esp32Url = "http://192.168.43.36";

// Temperature and gas thresholds
const TEMP_THRESHOLD = 30;
const GAS_THRESHOLD = 100;

// Fetch sensor data from ESP32
async function fetchSensorData() {
  try {
    const response = await fetch(esp32Url);
    const data = await response.json();

    const insideTemp = data.temperature;
    const gasResistance = data.gas_resistance;

    // Update inside classroom temperature
    document.querySelector(".temperature").innerHTML = insideTemp + "°C";

    // Check for warnings
    if (insideTemp > TEMP_THRESHOLD || gasResistance < GAS_THRESHOLD) {
      triggerWarning(insideTemp, gasResistance);
    } else {
      document.querySelector(".warnings").innerHTML = "No warnings.";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to trigger a warning
function triggerWarning(temperature, gasResistance) {
  let warningMessage = "Warning! ";

  if (temperature > TEMP_THRESHOLD) {
    warningMessage += `High temperature detected: ${temperature}°C. `;
  }
  if (gasResistance < GAS_THRESHOLD) {
    warningMessage += `Low gas resistance: ${gasResistance} KOhms. `;
  }

  document.querySelector(".warnings").innerHTML = warningMessage;

  const alertSound = new Audio("../Assets/alert-sound.mp3");
  alertSound.play();
}

// Fetch sensor data every 5 seconds
setInterval(fetchSensorData, 5000);

// ===============================================
// Fetching outside temperature (Mangalore) data
// ===============================================
const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Mangalore&units=metric&appid=6d53ee69c656480549a63a53fa342e16`;

async function fetchOutsideTemperature() {
  try {
    const response = await fetch(weatherApiUrl);
    const data = await response.json();

    const outsideTemp = data.main.temp;

    // Update the outside temperature
    document.querySelector(".outside-temperature").innerHTML = outsideTemp + "°C";
  } catch (error) {
    console.error("Error fetching outside temperature:", error);
  }
}

// Fetch outside temperature every 5 minutes
setInterval(fetchOutsideTemperature, 300000);
fetchOutsideTemperature();
