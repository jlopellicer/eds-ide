const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const projectsRootPath = path.join(__dirname, '..', 'projects');

router.post('/v1/:projectId/:componentId', (req, res) => {
  
});

router.put('/v1/:projectId/:componentId', (req, res) => {
  
});

router.delete('/v1/:projectId/:componentId', (req, res) => {
  
});

router.get('/v1/:projectId/:componentId', (req, res) => {
  console.log(`${projectsRootPath}/${req.params.projectId}/blocks/${req.params.componentId}/_${req.params.componentId}.json`);
  fs.readFile(`${projectsRootPath}/${req.params.projectId}/blocks/${req.params.componentId}/_${req.params.componentId}.json`, 'utf8', (err, rawData) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo' });
      return;
    }
    res.json(JSON.parse(rawData));
  });
});

router.get('/v1/:projectId/components', (req, res) => {

  fs.readFile(`${projectsRootPath}/${req.params.projectId}/component-definition.json`, 'utf8', (err, rawData) => {
    if (err) {
      res.status(500).json({ error: 'Error al leer el archivo' });
      return;
    }
    res.json(JSON.parse(rawData));
  });

});

router.get('/v1/projectList', (req, res) => {
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

router.get('/v1/test', (req, res) => {
  res.json({"message": "hola"})
});

module.exports = router;