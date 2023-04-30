document.getElementById('detectButton').addEventListener('click', function() {
  chrome.runtime.sendMessage({action: 'getNews'}, function(response) {
    var news = response.news;
    if (news) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://127.0.0.1:5000', true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          var prediction = JSON.parse(xhr.responseText).prediction;
          var resultElement = document.getElementById('result');
          if (prediction == 0) {
            resultElement.innerText = 'The news is real.';
          } else {
            resultElement.innerText = 'The news is fake.';
          }
        }
      };
      xhr.send('text=' + encodeURIComponent(news));
    }
  });
});
