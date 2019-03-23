/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Pessoa', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    data_de_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'Pessoa',
    timestamps: false
  });
};
