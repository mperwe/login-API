const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Dummy user data for demonstration purposes. In a real application, you would use a database.
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Endpoint for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Check if the user exists in the dummy data
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    return res.json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
});

const PORT = process.env.PORT || 5200;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
