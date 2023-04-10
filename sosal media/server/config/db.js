const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const CONNECTION_URL = "mongodb+srv://xyz123:xyz123@cluster0.8j16wlh.mongodb.net/?retryWrites=true&w=majority"
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}