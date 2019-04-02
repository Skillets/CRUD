// JavaScript source code
const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');


app.use(bodyparser.json());

var mySQLConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ZXasqw12',
    database: 'studentsdb',
    multipleStatements: true
});

mySQLConnection.connect((err) => {
    if(!err)
        console.log('Database connection successful');
    else
        console.log('Database connection failed \n Error :' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is running at port no: 3000'));

//get all students
app.get('/students', (req, res) => {
    mySQLConnection.query('SELECT * FROM students',(err,rows,fields) => {
        if (!err) {
            console.log(rows);

        } else {
            console.log(err);
        }
    })


});

//delete a student
app.delete('/students/:nid', (req, res) => {
    mySQLConnection.query('DELETE FROM students WHERE id = ?', [req.params.nid], (err, rows, fields) => {
        if (!err) {
            res.send('deleted successfully');
        } else {
            console.log(err);
        }
    })
});

//insert a student
app.post('/students', (req,res) => {
    let stu = req.body;
    var sql = "INSERT INTO students(id,firstName,lastName,year,age,major,gpa) VALUES (?,?,?,?,?,?,?)";
    
    mySQLConnection.query(sql,[stu.id,stu.firstName,stu.lastName,stu.year,stu.age,stu.major,stu.gpa],(err,rows,fields) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(err);
        }

    });
});

//updates a student 
app.put('/students', (req,res) => {
    let stu = req.body;
    var sql = "SET @id = ?;SET @firstName = ?; set @lastName = ?;SET @year = ?;SET @age = ?; set @major = ?; set @gpa = ?; \
    CALL studentAddorEdit(@id,@firstName,@lastName,@year,@age,@major,@gpa);";
    mySQLConnection.query(sql, [stu.id, stu.firstName, stu.lastName, stu.year, stu.age, stu.major, stu.gpa], (err, rows, fields) => {
        if (!err) {
            res.send('updated successfully');
        } else {
            console.log(err);
        }

    });
});

//updates a specific value for a student
app.patch('/students', (req, res) => {
    let stu = req.body;
    var sql ='UPDATE students SET firstName = ? WHERE id = ?;';
    mySQLConnection.query(sql, [stu.name,stu.id], (err, rows, fields) => {
        if (!err) {
            res.send('updated successfully');
        } else {
            console.log(err);
        }
    });
});



