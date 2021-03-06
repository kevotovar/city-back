const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const dotenv = require('dotenv')
const { schemaComposer } = require('graphql-compose')
const queries = require('./src/queries')
const cors = require('cors')
require('./src/db/mongo')
dotenv.config()

const PORT = 5000

schemaComposer.Query.addFields(queries)

const schema = schemaComposer.buildSchema()
const app = express()
const server = new ApolloServer({
  schema,
})

server.applyMiddleware({ app })

app.get('/', (_, res) =>
  res.json({
    status: 'ok',
  })
)

app.use(
  cors({
    origin: '*',
  })
)

app.listen(PORT)
