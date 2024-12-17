const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer ({storage: storage});

module.exports = upload; // this is the middleware that will be used in the routes