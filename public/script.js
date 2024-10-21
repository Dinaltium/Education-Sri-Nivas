// Show assignment details in a modal
function showAssignmentDetails(assignmentTitle) {
  document.getElementById('assignmentTitle').innerText = assignmentTitle;
  document.getElementById('assignmentModal').style.display = 'flex';
}

// Close the modal
function closeModal() {
  document.getElementById('assignmentModal').style.display = 'none';
}

// Handle assignment submission
function submitAssignment() {
  const fileInput = document.getElementById('fileUpload');
  const uploadStatus = document.getElementById('uploadStatus');

  if (fileInput.files.length > 0) {
      const fileName = fileInput.files[0].name;
      uploadStatus.textContent = `Successfully uploaded: ${fileName}`;
      uploadStatus.style.color = 'green';
  } else {
      uploadStatus.textContent = 'Please select a file to upload.';
      uploadStatus.style.color = 'red';
  }
}
