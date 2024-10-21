document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("student-login-form");
  const teacherForm = document.getElementById("teacher-login-form");


  // Show the student login form by default
  studentForm.style.display = "block";
  teacherForm.style.display = "none"; // Ensure the teacher form is hidden initially

  // Event listeners for the role selection buttons
  document.getElementById("student-login-btn").addEventListener("click", () => {
    studentForm.style.display = "block"; // Show student form
    teacherForm.style.display = "none"; // Hide teacher form
  });

  document.getElementById("teacher-login-btn").addEventListener("click", () => {
    teacherForm.style.display = "block"; // Show teacher form
    studentForm.style.display = "none"; // Hide student form
  });

  // Event listener for the student login form
  studentForm.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = studentForm.querySelector('input[name="username"]').value;
    const usn = studentForm.querySelector('input[name="usn"]').value;
    const password = studentForm.querySelector('input[name="password"]').value;

    try {
      const response = await fetch("/api/student-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, usn, password }),
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
  teacherForm.querySelector("form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent default form submission

    const teacherId = teacherForm.querySelector('input[placeholder="Teacher ID"]').value;
    const password = teacherForm.querySelector('input[placeholder="Password"]').value;

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
