// const mongoosse = require('mongoose');
// const config = require('config'); // config module
// const debug = require('debug')('development:mongoose'); // debug module



// mongoosse.connect(`${config.get("MONGODB_URI")}/CrownCarry`)
// .then(() => {
//     debug("Connected"); 
// })
// .catch((err)=>{
//     debug(err);
// })

// module.exports = mongoosse.connection;
const mongoosse = require('mongoose');
require('dotenv').config();
const config = require('config'); // config module
const debug = require('debug')('development:mongoose'); // debug module



mongoosse.connect(`${process.env.MONGODB_URI}`, {
     dbName: "CrownCarry",
    connectTimeoutMS: 30000, // Set timeout to 30 seconds (30,000 milliseconds)
})
.then(() => {
    debug("Connected");
})
.catch((err) => {
    debug("Connection error:", err);
});


module.exports = mongoosse.connection;