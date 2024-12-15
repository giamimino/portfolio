fetch('./assets/json/work-process.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse the JSON data
  })
  .then(datas => {
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
