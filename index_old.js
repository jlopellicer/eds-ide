const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 3000;

const projectsRootPath = path.join(__dirname, 'projects');

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

app.get('/app', (req, res) => {
  res.render('index', { titulo: 'Hola desde Express!' });
});

app.post('/api/v1/:projectId/:componentId', (req, res) => {
  
});

app.put('/api/v1/:projectId/:componentId', (req, res) => {
  
});

app.delete('/api/v1/:projectId/:componentId', (req, res) => {
  
});

app.get('/api/v1/:projectId/:componentId', (req, res) => {
  fs.readFile(`${projectsRootPath}/${req.params.projectId}/blocks/${req.params.componentId}/_${req.params.componentId}.json`, 'utf8', (err, rawData) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo' });
      return;
    }
    res.json(JSON.parse(rawData));
  });
});

app.get('/api/v1/:projectId/components', (req, res) => {

  fs.readFile(`${projectsRootPath}/${req.params.projectId}/component-definition.json`, 'utf8', (err, rawData) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo' });
      return;
    }
    res.json(JSON.parse(rawData));
  });

});

app.get('/api/v1/projectList', (req, res) => {
  fs.readdir(projectsRootPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer la carpeta' });
    }

    const projects = files.filter(file => 
      fs.statSync(path.join(projectsRootPath, file)).isDirectory()
    );

    res.json({ projects });
  });
});

app.get('/api/v1/test', (req, res) => {
  res.json({"message": "hola"})
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});