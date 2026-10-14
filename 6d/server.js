const express = require('express'); 
const app = express(); 
app.use(express.json()); 
let students = ["Mulla", "Fareena"]; 
 
// CREATE 
app.post('/students', (req, res) => { 
    students.push(req.body.name); 
    res.send("Student Added"); 
}); 
 
// READ 
app.get('/students', (req, res) => { 
    res.json(students); 
}); 
 
// UPDATE 
app.put('/students/:id', (req, res) => { 
    students[req.params.id] = req.body.name; 
    res.send("Student Updated"); 
});
// DELETE 
app.delete('/students/:id', (req, res) => { 
students.splice(req.params.id, 1); 
res.send("Student Deleted"); 
}); 
app.listen(1004, () => { 
console.log("Server Running on Port 1004"); 
});