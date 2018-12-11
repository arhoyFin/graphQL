const express = require('express');  // require the express package and store it as app.
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema'); // schema is the contract between the client and the server.
const mongoose = require('mongoose');
const app = express();     


//connect to mlab with cred
mongoose.connect('mongodb://anna2020:abc123@ds127843.mlab.com:27843/gql-ninja' , { useNewUrlParser: true });﻿
mongoose.connection.once('open',()=>{
    console.log('connected to db!');
})
.on('error',(err)=>{console.log('connection error in app',err)})

// middleware 
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));
app.listen(4000,()=>{
    console.log('listening for requests');
}); // listening on port
