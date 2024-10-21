document.addEventListener("DOMContentLoaded", () => {
  const studentLoginForm = document.getElementById("student-login-form");
  const teacherLoginForm = document.getElementById("teacher-login-form");

  // Show the student login form by default
  studentLoginForm.style.display = "block";

  // Event listeners for the role selection buttons
  document.getElementById("student-login-btn").addEventListener("click", () => {
      studentLoginForm.style.display = "block";
      teacherLoginForm.style.display = "none";
  });

  document.getElementById("teacher-login-btn").addEventListener("click", () => {
      teacherLoginForm.style.display = "block";
      studentLoginForm.style.display = "none";
  });

  // Event listener for the student login form
  document.getElementById("student-login").addEventListener("click", async () => {
      const username = document.getElementById('student-username').value;
      const usn = document.getElementById('student-usn').value;
      const password = document.getElementById('student-password').value;

      if (!username || !usn || !password) {
          alert('Please fill in all fields.');
          return;
      }

      try {
          const response = await fetch("/App/login", {
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
  document.getElementById("teacher-login").addEventListener("click", async () => {
      const teacherId = document.getElementById('teacher-id').value;
      const password = document.getElementById('teacher-password').value;

      if (!teacherId || !password) {
          alert('Please fill in all fields.');
          return;
      }

      try {
          const response = await fetch("/App/login", {
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
