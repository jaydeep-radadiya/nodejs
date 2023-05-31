const register = function(username){
    console.log(`user ${username} has been registered`)
}

const login = function(username){
    console.log(`user ${username} logged in`)
}

// you can't access this module outside untill you export it
// there are many ways to export module, one of them is below
// module.exports = register

// if multiple things exports then create object with key: value pair
// JS feature: if both key & value are same then write just once
module.exports = {
    register,
    login
}