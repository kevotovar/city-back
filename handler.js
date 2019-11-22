// graphql.js

const { ApolloServer } = require('apollo-server-lambda')
const { schemaComposer } = require('graphql-compose')
const queries = require('./src/queries')

require('./src/db/mongo')

schemaComposer.Query.addFields(queries)

const server = new ApolloServer({ schema: schemaComposer.buildSchema() })

exports.graphqlHandler = server.createHandler()
