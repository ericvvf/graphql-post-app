/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Email', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.TEXT,
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
    tableName: 'Email',
    timestamps: false
  });
};
