// genrating token for user
const jwt = require('jsonwebtoken');

genrateToken = (user)=>{
    return jwt.sign({ email:user.email, id: user._id }, process.env.JWT_KEY  );
}

module.exports.genrateToken = genrateToken;