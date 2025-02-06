const mongoose = require('mongoose');

const menuitems = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    description : {
        type: String,
    },
    price : {
        type: Number,
        required: true
    }

})

const a = mongoose.model('menuitems', menuitems);
module.exports = a;  //exporting the model
