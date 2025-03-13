const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Importar rutas desde archivos separados
const apiRoutes = require('./routes/api');
const appRoutes = require('./routes/app');

// Middleware para usar las rutas
app.use('/api', apiRoutes);
app.use('/app', appRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
