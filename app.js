// // This function sends an HTTP POST request to the Flask app API with the news article text

// function predictFakeNews(newsText) {
//     const apiUrl = 'http://localhost:5000';
// // Set up the request payload with the news article text
//     const payload = {text: newsText};

// // Send the HTTP request using fetch()
//     return fetch(apiUrl, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(payload)
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Parse the response data to get the predicted label
//         const prediction = data.prediction;
//         // Return the predicted label (0 for real news, 1 for fake news)
//         return prediction;
//     })
//     .catch(error => {
//         console.error('Error predicting fake news:', error);
//         // Handle any errors that may occur during the HTTP request/response process

//     });
// }
