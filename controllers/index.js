const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // rendering the view of index.ejs file
    res.render('index');
});

module.exports = router;