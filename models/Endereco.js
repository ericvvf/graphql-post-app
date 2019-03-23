/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Endereco', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    logradouro: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    uf: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Pessoa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Pessoa',
        key: 'id'
      }
    }
  }, {
    tableName: 'Endereco'
  });
};
