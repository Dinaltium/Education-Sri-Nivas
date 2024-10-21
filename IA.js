document.addEventListener('DOMContentLoaded', () => {
  const internalMarks = [
      { subject: 'Mathematics', marks: 80 },
      { subject: 'Physics', marks: 65 },
      { subject: 'Computer Science', marks: 75 },
      { subject: 'Chemistry', marks: 90 },
      { subject: 'Chemistry', marks: 70 },
      { subject: 'English', marks: 80 },
      { subject: 'Hindi', marks: 81 },
  ];

  const internalMarksList = document.getElementById('internalMarks');

  // Add internal marks to the page
  internalMarks.forEach(mark => {
      const listItem = document.createElement('li');
      listItem.textContent = `${mark.subject}: Internal Marks - ${mark.marks}`;
      internalMarksList.appendChild(listItem);
  });
});
