const express = require('express');
const app = express();
const port = 3000;

// Require the upload using multer middleware
const upload = require('./upload');

app.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
``