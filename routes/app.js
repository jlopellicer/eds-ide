const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { titulo: 'Hola desde Express!' });
});

module.exports = router;