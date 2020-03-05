'use strict';
module.exports = (sequelize, DataTypes) => {
  const visitor = sequelize.define('visitor', {
    nama_visitor: DataTypes.STRING,
    employee_yang_dituju: DataTypes.STRING,
    tanggal_visit: DataTypes.DATE
  }, {
    // freezeTableName: true
  });
  visitor.associate = function(models) {
    // associations can be defined here
    // visitor.hasOne(models.employee, {
    //   foreignKey: {
    //     name: 'nama_employee'
    //   }
    // });
  };
  return visitor;
};