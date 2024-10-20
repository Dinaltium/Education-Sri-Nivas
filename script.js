// script.js

// Get the button elements
const studentLoginBtn = document.getElementById('student-login-btn');
const teacherLoginBtn = document.getElementById('teacher-login-btn');

// Get the login form elements
const studentLoginForm = document.getElementById('student-login-form');
const teacherLoginForm = document.getElementById('teacher-login-form');

// Function to show the student login form and hide the teacher form
function showStudentLogin() {
  studentLoginForm.style.display = 'block';
  teacherLoginForm.style.display = 'none';
}

// Function to show the teacher login form and hide the student form
function showTeacherLogin() {
  teacherLoginForm.style.display = 'block';
  studentLoginForm.style.display = 'none';
}

// Event listeners for the buttons
studentLoginBtn.addEventListener('click', showStudentLogin);
teacherLoginBtn.addEventListener('click', showTeacherLogin);
