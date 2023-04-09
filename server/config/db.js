const mongoose = require('mongoose')

const CONNECTION_URL = "mongodb+srv://sudipta123:sudipta123@cluster0.kums58b.mongodb.net/?retryWrites=true&w=majority"
const connection = mongoose.connect(CONNECTION_URL);

module.exports = {connection}