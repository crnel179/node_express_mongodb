const mongoose = require('mongoose');

const authorsSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    
    lname: {
        type: String,
        required: true
    }
});

// export schema within the `Authors` table
module.exports = mongoose.model('Authors', authorsSchema);