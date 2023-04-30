var formHtml = '<form id="news-form">' +
    '<label for="text">Enter the news text:</label><br>' +
    '<textarea name="text" id="text" cols="30" rows="10"></textarea><br><br>' +
    '<button type="submit">Predict</button>' +
    '</form>' +
    '<br>' +
    '<p>Prediction: <span id="prediction"></span></p>';

var popupHtml = '<html>' +
    '<head>' +
    '<title>Fake News Detector</title>' +
    '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>' +
    '<script src="popup.js"></script>' +
    '</head>' +
    '<body>' +
    formHtml +
    '</body>' +
    '</html>';

var popup = window.open('', '', 'width=400,height=400');
popup.document.write(popupHtml);

$('#news-form').on('submit', function(event) {
    event.preventDefault();
    var text = $('#text').val();
    $.ajax({
        type: 'POST',
        url: 'http://localhost:5000/predict',
        data: {'text': text},
        success: function(data) {
            var prediction = data.prediction;
            if (prediction == 0) {
                $('#prediction', popup.document).text('The news is Real');
            } else {
                $('#prediction', popup.document).text('The news is Fake');
            }
        }
    });
});

