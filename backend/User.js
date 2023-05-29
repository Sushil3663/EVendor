const mongoos = require('mongoose')

let userSchema = new mongoos.Schema({
    firstName: String,
        lastName: String,
        email: {
            type : String,
            unique: true,
        },
        password: String,
        confirmPassword: String
})

module.exports = mongoos.model('users',userSchema);