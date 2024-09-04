const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Simple route for login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'yusuf' && password === 'yusu') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
