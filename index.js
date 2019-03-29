const express = require('express')
const routes = require('./api/http/routes.js')
const graphqlHTTP = require('express-graphql')
const { schema } = require('./api/http/graphql/schema')

const app = express()

app.use('/api', routes)

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))


app.listen(3000)

console.log("Server running at port: http://localhost:3000")