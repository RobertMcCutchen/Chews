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
                console.log(user.id)
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

//Favorite
app.post('/favorite', (req,res) => {
    let name = body.data.name
    let phoneNumber = body.data.phone
    let price = body.data.price
    let stars = body.data.rating
    let category = body.data.catagories
    let distance = Math.round((body.data.distance)/1609.33)
    let address = body.data.location.display_address
    let latitude = body.data.coordinates.latitude
    let longitude = body.data.coordinates.longitude
    
    let favorite = models.Favorite.build({
        name: name,
        phoneNumber: phoneNumber,
        price: price,
        stars: stars,
        category: category,
        distance: distance,
        address: address,
        latitude: latitude,
        longitude: longitude,  
    })

    // save the favorite instance/object to the database 
    favorite.save().then(savedFavorite => res.json(savedFavorite))
    .catch(error => console.log(error))
})

app.listen(5433, () => {
    console.log('Server is running...')
})