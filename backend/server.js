const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { readUsers, writeUsers } = require('./dataHelpers');

const app = express();
const JWT_SECRET = 'your-secret-key'; // Use environment variable in production

app.use(cors());
app.use(express.json());

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });
  await writeUsers(users);
  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = await readUsers();
  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ message: 'Login successful', token });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
