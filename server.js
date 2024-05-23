const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint for registration
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  // Here you would normally handle user registration logic (e.g., saving to a database)
  console.log('Registering user:', name, email);
  res.send({ message: "Registration successful!" });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// const express = require('express');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// app.get('/api', (req, res) => {
//   res.send('API is working');
// });

// // The "catchall" handler: for any request that doesn't
// // match one above, send back React's index.html file.
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
