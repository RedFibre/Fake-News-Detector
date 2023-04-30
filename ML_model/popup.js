document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', function() {
    var text = document.getElementById('news-text').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:5000/predict');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onload = function() {
      var response = JSON.parse(xhr.responseText);
      var prediction = response.prediction;
      var predictionElement = document.getElementById('prediction-result');
      if (prediction == 0) {
        predictionElement.textContent = 'The news is Real';
      } else {
        predictionElement.textContent = 'The news is Fake';
      }
    };
    xhr.send(JSON.stringify({text: text}));
  });
});
