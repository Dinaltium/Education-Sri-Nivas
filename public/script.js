document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("student-login-form");
    const teacherForm = document.getElementById("teacher-login-form");

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('visible'); // Toggle visibility
    });

  
    // Show the student login form by default
    studentForm.style.display = "block";
  
    // Event listeners for the role selection buttons
    document.getElementById("student-login-btn").addEventListener("click", () => {
      studentForm.style.display = "block";
      teacherForm.style.display = "none";
    });
  
    document.getElementById("teacher-login-btn").addEventListener("click", () => {
      teacherForm.style.display = "block";
      studentForm.style.display = "none";
    });
     
    
  
    // Event listener for the student login form
    studentForm
      .querySelector("form")
      .addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission
  
        const usn = studentForm.querySelector('input[placeholder="USN"]').value;
        const password = studentForm.querySelector(
          'input[placeholder="Password"]'
        ).value;
  
        try {
          const response = await fetch("/api/student-login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ usn, password }),
          });
  
          if (response.ok) {
            // Redirect to homepage.html on successful login
            window.location.href = "homepage.html";
          } else {
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        }
      });
  
    // Event listener for the teacher login form
    teacherForm
      .querySelector("form")
      .addEventListener("submit", async (event) => {
        event.preventDefault(); // Prevent default form submission
  
        const teacherId = teacherForm.querySelector(
          'input[placeholder="Teacher ID"]'
        ).value;
        const password = teacherForm.querySelector(
          'input[placeholder="Password"]'
        ).value;
  
        try {
          const response = await fetch("/api/teacher-login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ teacherId, password }),
          });
  
          if (response.ok) {
            // Redirect to homepage.html on successful login
            window.location.href = "homepage.html";
          } else {
            alert("Login failed. Please check your credentials.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert("An error occurred. Please try again later.");
        }
      });
  });
  