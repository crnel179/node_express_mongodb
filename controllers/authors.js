const express = require('express');
const router = express.Router();

// authors route
router.get('/', (req, res) => {
    // rendering the view of index.ejs file
    res.render('authors/index');
});

// display new author route
router.get('/new', (req, res) => {
    res.render('authors/new');
});

// create new author route
router.post('/', (req, res) => {
    res.send('create');
});

module.exports = router;