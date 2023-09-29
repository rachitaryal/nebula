// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const express = require('express');
const app = express();
const port = 5000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World1!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
