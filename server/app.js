const express = require('express');
const app = express();
const cors = require('cors');
const models = require('./models');

app.use(express.json());
app.use(cors);

//Signup
app.post('/signup', (req,res) => {
    let username = req.body.username
    let password = req.body.password
    console.log(username)
    console.log(password)
    //Create the user instance 
    let user = models.User.build({
        username: username,
        password: password,  
    })

    // save the user instance/object to the database 
    user.save().then(savedUser => res.json(savedUser))
    .catch(error => console.log(error))    
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
                res.send({message: "user found!"})
            } else {
                console.log('No result')
                res.send({"Password is incorrect!"})
            }
        })
    } else {
        console.log('No user')
    }
})

app.listen(5432, () => {
    console.log('Server is running...')
})