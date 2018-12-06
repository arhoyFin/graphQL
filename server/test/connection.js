const mongoose = require('mongoose');

// connect to mongodob
mongoose.connect('mongodb://localhost/testaroo' , { useNewUrlParser: true });﻿
mongoose.connection.once('open',()=>{
    console.log('connected to db in testaroo!');
}).on('error',(err)=>{console.log('connection error in testaroo',err)});