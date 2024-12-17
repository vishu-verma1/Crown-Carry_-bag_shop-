const mongoosse = require('mongoose');
const config = require('config'); // config module
const debug = require('debug')('development:mongoose'); // debug module


mongoosse.connect(`${config.get("MONGODB_URI")}/CrownCarry`)
.then(() => {
    debug("Connected"); 
})
.catch((err)=>{
    debug(err);
})

module.exports = mongoosse.connection;