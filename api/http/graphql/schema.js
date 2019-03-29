const models = require('../../models/index')

const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require('graphql')

const EmailType = new GraphQLObjectType({
  name: 'Email',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }
})

const TelefoneType = new GraphQLObjectType({
  name: 'Telefone',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    ddd: {
      type: new GraphQLNonNull(GraphQLString),
    },
    numero: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }
})

const PessoaType = new GraphQLObjectType({
  name: 'Pessoa',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    nome: {
      type: new GraphQLNonNull(GraphQLString),
    },
    cpf: {
      type: new GraphQLNonNull(GraphQLString),
    },
    data_nascimento: {
      type: new GraphQLNonNull(GraphQLString),
    },
    emails: {
      type: new GraphQLList(EmailType),
      resolve: (pessoa) => {
        return models.Email.findAll({
          where: {
            Pessoa_id: pessoa.id
          }
        })
      }
    },
    telefones: {
      type: new GraphQLList(TelefoneType),
      resolve: (pessoa) => {
        return models.Telefone.findAll({
          where: {
            Pessoa_id: pessoa.id
          }
        })
      }
    }
  },
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    pessoas: {
      type: new GraphQLList(PessoaType),
      resolve: () => {
        return models.Pessoa.findAll({})
      },
    },
    pessoa: {
      type: PessoaType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve: (pessoa, args) => {
        return models.Pessoa.findByPk(args.id)
      }
    }
  },
})

const schema = new GraphQLSchema({
  query: QueryType
})

module.exports = { schema }
