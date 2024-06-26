require('dotenv').config();
const express = require('express');
const path = require('path');
const router = require('./routes/router.js');
const connectMongo = require('./db/conn.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use('/', router);
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', './views');
app.set('view engine', 'ejs');

app.listen(PORT, ()=>{
    connectMongo();
});