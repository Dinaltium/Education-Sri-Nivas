document.getElementById('student-login-btn').addEventListener('click', function() {
  document.getElementById('student-login-form').style.display = 'block';
  document.getElementById('teacher-login-form').style.display = 'none';
});

document.getElementById('teacher-login-btn').addEventListener('click', function() {
  document.getElementById('teacher-login-form').style.display = 'block';
  document.getElementById('student-login-form').style.display = 'none';
});
