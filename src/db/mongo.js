const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(function() {
    console.log('connected db')
  })
  .catch(function(connError) {
    console.error(`Error connecting with the db ${connError}`)
  })
