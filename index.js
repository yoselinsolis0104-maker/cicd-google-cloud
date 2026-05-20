const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hola desde CI/CD con Google Cloud');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});