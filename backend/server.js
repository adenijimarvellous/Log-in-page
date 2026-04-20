const express = require('express');
const cors = require('cors');
const { readUsers, writeUsers } = require('./dataHelpers');

const app = express();

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }
  users.push({ email, password });
  await writeUsers(users);
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ message: 'Login successful' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
