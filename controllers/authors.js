const express = require('express');
const router = express.Router();
const author = require('../models/author');

// authors route
router.get('/', (req, res) => {
    // rendering the view of index.ejs file
    res.render('authors/index');
});

// display new author route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new author() });
});

// create new author route
router.post('/', (req, res) => {
    res.send('create');
});

module.exports = router;