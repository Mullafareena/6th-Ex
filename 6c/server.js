const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Welcome to Express "Hello world" Program'); 
}); 
app.listen(1003, () => { 
console.log('Server Started'); 
});