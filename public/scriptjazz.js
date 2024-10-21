// Sample news data
const newsArticles = [
  {
      title: "New Course Offerings for Fall 2024",
      date: "2024-10-15",
      description: "We're excited to announce new courses for the upcoming fall semester, including Artificial Intelligence and Data Science."
  },
  {
      title: "Annual Science Fair Winners Announced",
      date: "2024-10-10",
      description: "Congratulations to our students who won awards at the annual science fair! Check out the list of winners and their projects."
  },
  {
      title: "Upcoming Webinar on Career Opportunities",
      date: "2024-10-20",
      description: "Join us for a free webinar on career opportunities in technology and engineering, featuring industry experts."
  },
  {
      title: "Campus Safety Protocols Update",
      date: "2024-10-12",
      description: "Please read the updated campus safety protocols in light of recent health guidelines."
  }
];

// Function to render news articles
function renderNews() {
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = ''; // Clear the container

  newsArticles.forEach(article => {
      const newsCard = document.createElement('div');
      newsCard.classList.add('news-card');

      newsCard.innerHTML = `
          <h3>${article.title}</h3>
          <p class="date">${article.date}</p>
          <p>${article.description}</p>
      `;
      
      newsContainer.appendChild(newsCard);
  });
}

// Render news articles on page load
document.addEventListener("DOMContentLoaded", renderNews);
