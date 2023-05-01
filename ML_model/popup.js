// Get the form element from the webpage
const form = document.getElementById('news-form');
console.log(form);
// Listen for form submit event
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  // Get the input text from the form
  const input = document.getElementById('news-text').value;
  // Send an AJAX request to the Flask server to get the prediction
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5000/predict');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Update the webpage's DOM to display the prediction result
      const prediction = JSON.parse(xhr.responseText).prediction;
      const resultDiv = document.getElementById('prediction-result');
      resultDiv.innerText = prediction === 0 ? 'The news is Real' : 'The news is Fake';
    } else {
      console.error(xhr.statusText);
    }
  };
  xhr.onerror = function() {
    console.error(xhr.statusText);
  };
  xhr.send(JSON.stringify({text: input}));
});
