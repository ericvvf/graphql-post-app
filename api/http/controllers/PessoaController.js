const models = require('../../models/index')


module.exports = {
  findAll(request, response) {
    return models.Pessoa.findAll({}).then(pessoas => {
      response.json({ data: pessoas });
    });
  }
};