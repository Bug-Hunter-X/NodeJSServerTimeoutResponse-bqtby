const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Connection': 'close' // Important for proper timeout handling
  });
  
  setTimeout(() => {
    res.end('Hello World!');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});