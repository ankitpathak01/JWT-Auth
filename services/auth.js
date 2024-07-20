const jwt=require("jsonwebtoken");
const secret='ankit@gmail.@.com';


function setUser(user) {
    return jwt.sign({
        _name:user.name,
        email:user.email
    },secret);
}

function getUser(token) {
    if(!token) return null;
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}

module.exports={
    setUser,
    getUser,
}