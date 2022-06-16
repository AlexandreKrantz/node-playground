const fs = require('fs/promises');

// first argument is the input, which can be a relative or absolute url. If it is relative, then the second argument should contain the base url. 
const myURL = new URL('/foo', 'https://example.org/'); // https://example.org/foo
// the URL class is available globally. 

console.log(myURL);
fs.writeFile('myURL.json', JSON.stringify(myURL.protocol));