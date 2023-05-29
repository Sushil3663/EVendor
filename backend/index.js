const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')


app.use(express.json({limit:"100mb"}))
app.use(cors())

// Connection
require('./config')
const user = require('./User')

//product
const product = require('./Product')



app.get('/', (req, res) => {
    res.send("Home App")
})


//Sign Up Api
app.post('/signup', async (req, res) => {


    const { email } = req.body;

    try {
        const result = await user.findOne({ email });

        if (result) {
            res.send({ message: 'Email exists', alert: false });
        } else {
            const data = user(req.body)
            const save = await data.save()
            save = result.toObject()
            delete save.password
            res.send({ message: 'Email does not exist', alert: true });
        }
    } catch (err) {
        console.error('Error checking email:', err);
        res.status(500).send('Internal Server Error');
    }
});


//Login Api
app.post('/login', async (req, res) => {

    const { email,password } = req.body;

    try {
        const result = await user.findOne({ email, password }).select("-password -confirmPassword");

        if (result) {
            res.send({ message: 'Login Successful', alert: true, result });
        } else {
            res.send({ message: 'Please try again', alert: false });
        }
    } catch (err) {
        console.error('Error checking email:', err);
        res.status(500).send('Internal Server Error');
    }
});


//product Section
app.post('/uploadProduct',async(req,res)=>{
    // let data = req.body;
    console.log(req.body)
    let data = product(req.body)
    let save = await data.save()
    res.status(200).send(save)

})



app.listen(5000, () => {
    console.log("server is listening to a port!")
})