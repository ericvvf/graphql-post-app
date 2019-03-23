const express = require('express')
const routes = require('./api/http/routes.js')
// const graphqlHTTP = require('express-graphql')
// const { buildSchema } = require('graphql')

const app = express()

app.use('/api', routes)

// const schema = buildSchema(`
//   "The root of it all"
//   type Query {
//     "Return a greeting"
//     hello: String
//   }
// `)

// const root = {
//   hello: () => 'Hello world!'
// }

// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true
// }))


app.listen(3000)

console.log("Server running at port: http://localhost:3000")