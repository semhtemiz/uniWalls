const express = require('express');
const cors = require('cors');
const session = require('express-session');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const logoutRoute = require('./routes/logout');


const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // frontend adresin
  credentials: true,                // cookie gönderebilmek için gerekli
}));

app.use(express.json());

app.use(session({
  secret: 'gizli_kelime',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24
  }
}));

app.use('/api', registerRoute);
app.use('/api', loginRoute);
app.use('/api', logoutRoute);

app.get('/api/test', (req, res) => {
  res.send('API çalışıyor');
});

app.listen(5000, () => {
  console.log("✅ Backend çalışıyor: http://localhost:5000");
});
