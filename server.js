const express = require('express');
require('dotenv').config();
const dbConnect = require('./db');

const app = express();
dbConnect();
app.use(express.json({extended:false}));
//routes

app.use('/api/user/', require('./routes/user'));
app.use('/api/contact/', require('./routes/contact'));
app.use('/api/auth/', require('./routes/auth'));


const PORT = process.env.PORT || 4000; 

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));