const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
   order:{type: 'String'},
    total:{type: 'string'},
});


mongoose.model('Order', orderSchema);