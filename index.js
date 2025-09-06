const express = require('express');
const app = express();

// Serve the package.json file
app.get('/json', (req, res) => {
  res.sendFile(__dirname + '/package.json');
});

// OR alternatively, you can read and send it as JSON:
app.get('/json', (req, res) => {
  const packageJson = require('./package.json');
  res.json(packageJson);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});