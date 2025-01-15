require('dotenv').config();
const config ={
    apikey: process.env.API_KEY,
    serverSecrete: process.env.SECRET_SERVER,
    isKalvium: process.env.IS_KALVIUM===true,

};
module.exports=config;
console.log("Environment variable");
console.log(config);