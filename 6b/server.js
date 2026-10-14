const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Welcome to HOME Page'); 
}); 
app.get('/about', (req, res) => { 
res.send('Welcome to ABOUT Page'); 
}); 
app.get('/contact', (req, res) => { 
res.send('Welcome to CONTACT Page'); 
}); 
app.listen(1002, () => { 
console.log('Server Running on Port 1002'); 
}); 