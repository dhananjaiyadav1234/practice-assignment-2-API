require("dotenv").config();
const mongoose = require("mongoose");
const connect = () => {mongoose.connect(process.env.db_url)
.then(()=> console.log("connected to db"))
.catch((err)=> console.log(`error connecting to db ${err}`));}

module.exports = connect; 