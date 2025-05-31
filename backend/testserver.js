const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
  res.send('API çalışıyor');
});

app.listen(5000, () => {
  console.log('✅ Test backend çalışıyor: http://localhost:5000');
});
