const express = require('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

const app = express()

const schema = buildSchema(`
  "The root of it all"
  type Query {
    "Return a greeting"
    hello: String
  }
`)

const root = {
  hello: () => 'Hello world!'
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))


app.listen(3000)

console.log("Server running at port: 3000")