// Get the form element from the webpage
const form = document.getElementById('news-form');

// Listen for form submit event
form.addEventListener('submit', async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input text from the form
  const input = document.getElementById('news-text').value;

  try {
    // Send a POST request to the Flask server to get the prediction
    const response = await fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({text: input}),
    });

    // Check if the request was successful
    if (response.ok) {
      // Update the webpage's DOM to display the prediction result
      const prediction = (await response.json()).prediction;
      const resultDiv = document.getElementById('prediction-result');
      resultDiv.innerText = prediction === 0 ? 'The news is Real' : 'The news is Fake';
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
});
