const mongoosse = require('mongoose');
mongoosse.connect("mongodb://127.0.0.1:27017/CrownBag")
.then(() => {
    console.log("Database connected");
})
.catch((err)=>{
    log.console(err);
})

module.exports = mongoosse.connection;