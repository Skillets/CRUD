# CRUD
---------------------------------
# CRUD project for COSC 331
The purpose of this project is to create a basic backend CRUD application that accepts GET/PUT/POST/PATCH/DELETE requests 
from the frontent and use them to modify a database of students.

This project was created for the purposes of a school project for Computer Science 331: Fundamentals of Computer Networking.

All of the code is handeled in a single javascript file titled "index.js" Using node, 
the javascript file was capable of taking advantage of mySQL and express.js 
commands to modify the mySQL database titled 'studentsDB'

Each student in the database has an id,a first name, a last name, a year, an age, a major, and a GPA.

the program does this by first making a connection with the mySQL database using a previously set hostname and password, and then uses express commands to host a server at localhost:3000. 

The project has 5 basic functions that can be called from localhost:3000

# GET
receives a call of localhost:3000/students and returns a list in the console of all students in the database.

# PUT
used to update a student's records.
After a PUT request is sent to localhost:3000/students, 
inserts new student data with give values of id,firstname,lastname,year,age,major, and GPA into a previously created database. 
The modified list is then printed to the console.

# POST 
used to insert a new student record.
After a POST request is sent to localhost:3000/students,
inserts a new student with the given values of id,firstname,lastname,year,age,major,and GPA into the database. 
if an ID is not entered, it will automatically generate a new ID. 
The modified list is then returned to the console.
if the id is already in use the request fails.

# PATCH
used to update a student's name.

After a PATCH request is sent to localhost:3000/students, 
inserts a new name into the "firstName" field of the 'student' whos ID matches the given id.
if the ID is not found, the request fails.
Once the name is corrected, returns the modified information for the given student to the console

# DELETE
used to remove a student from the database.

After a DELETE request is sent to localhost:3000/students/:id,
the program checks the database for the given ID, and if it exists, the student matching the ID is removed from the database.
the newly modified table is then printed to the console.






