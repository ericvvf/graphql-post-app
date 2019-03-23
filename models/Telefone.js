/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Telefone', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Pessoa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'Pessoa',
        key: 'id'
      }
    },
    ddd: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'Telefone'
  });
};
