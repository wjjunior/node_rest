'use strict';
module.exports = (sequelize, DataTypes) => {
  const Metas = sequelize.define('Metas', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL,
    data: DataTypes.DATE
  }, {});
  Metas.associate = function(models) {
    // associations can be defined here
  };
  return Metas;
};
