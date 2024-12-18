document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const resultDiv = document.getElementById('result');

  // Load the JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      // Once data is loaded, attach event listener to the button
      searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase();
        
        // Find the complaint in the data
        const match = data.find(item => item.complaint.toLowerCase().includes(query));
        
        if (match) {
          resultDiv.innerHTML = `
            <h2>${match.complaint}</h2>
            <p>${match.action}</p>
          `;
        } else {
          resultDiv.innerHTML = "<p>No instructions found for that complaint. Please try another term.</p>";
        }
      });
    })
    .catch(error => {
      console.error('Error loading data:', error);
      resultDiv.innerHTML = "<p>Error loading data. Please try again later.</p>";
    });
});
