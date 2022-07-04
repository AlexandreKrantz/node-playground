const axios = require('axios');

axios
  .get('http://localhost:8000/books1')
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.log(error);
    fs.writeFile('error.json', JSON.stringify(error));
  });
