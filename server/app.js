const express = require('express');
const app = express();
const cors = require('cors');
const models = require('./models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
app.use(express.json());
app.use(cors());

//Signup
app.post('/signup', (req,res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username)
    console.log(password)
    //Create the user instance 
    bcrypt.hash(password, 10).then(function(hash) {
        let user = models.User.build({
            username: username,
            password: hash,  
        })
    
        // save the user instance/object to the database 
        user.save().then(savedUser => res.json(savedUser))
        .catch(error => console.log(error))
    })    
})

// Login
app.post('/login', async (req,res) => {
    let username = req.body.username
    let password = req.body.password
    let user = await models.User.findOne({
        where: {
            username: username
        }
    })
    if(user) {
        bcrypt.compare(password, user.password, (error, result) => {
            if(result) {
                res.send(true)
            } else {
                console.log('No result')
                res.send(false)
            }
        })
    } else {
        console.log('No user')
        res.send(false)
    }
})

app.listen(5433, () => {
    console.log('Server is running...')
})