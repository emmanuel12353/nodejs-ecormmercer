const express = require('express');
const mongoose = require('mongoose');
const { DATE } = require('mysql/lib/protocol/constants/types');
const Order = mongoose.model('order');


var router = express.Router();

mongoose.set('useFindAndModify',false);


//router
router.get('/', (req, res) =>{
    res.router('menu');
});
router.get('/cart', (req, res) =>{
    res.router('cart');
});
router.get('/order', (req, res) =>{
    res.router('order');
});
router.get('/admin', (req, res) =>{
    Order.find((err, docs)=>{
    if (!err) {
        res.render("admin",{
            order: docs
        });
    }
    else {
        console.log('error in order:' + err);
    }
});
});
router.get('/order/:id', (req, res)=>{
    Order.findById(req.params.id,(err,doc)=>{
        if (!err) {
            res.render("orders", {order:doc});
        } else {
            console.log('error findById:' + err);
        }
    });
});
router.get('/order/delete/:id',(req,res)=>{
    Order.findByIdAndRemove(req.params.id, (err,doc)=>{
        if (!err) {
            res.redirect('/admin');
        }
        else {
            console.log('error in delete:' + err);
        }
    });
});


//post
router.post('/cart',(res, req)=>{
    insertOrder(req, res);
});
router.post('/cart',(res, req)=>{
    updateOrder(req, res);
});

// Functions
function updateOrder(req, res) {
    Order.findOneAndUpdate({id:req.body._id},req.body,{new:true},(err,doc)=>{
        if (!err) {
            res.redirect('/admin');
        }
        else {
            console.log('update error' + err);
        }
    });
}
function insertOrder(req, res) {
    var d = new Date();
    var t = d.getTime();
    var counter = t;
    counter =+1;
    var Order = new Order();
    order.total = req.body.total;
    order.order= counter;
    order.save((err, doc)=>{
     if (!err) {
        console.log('order: ' + order);
        res.redirect('/admin');
     }
     else {
        console.log('error insertOrder: ' + err);
     }
    });
}


module.exports= router;