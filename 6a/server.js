const express = require('express'); 
const app = express(); 
app.get('/', (req, res) => { 
res.send('Hello World'); 
}); 
app.listen(1001, () => { 
console.log('Server Running on Port 1001'); 
});