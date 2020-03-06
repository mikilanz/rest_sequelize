'use strict';

const employee = require("../models").employee;

module.exports = (sequelize, DataTypes) => {
  const visitor = sequelize.define('visitor', {
    nama_visitor: DataTypes.STRING,
    employee_yang_dituju: DataTypes.STRING,
    tanggal_visit: DataTypes.DATEONLY
  }, {
    // freezeTableName: true
  });
  visitor.associate = function(models) {
    // associations can be defined here
    visitor.belongsTo(models.employee, {
      foreignKey: {
        name: 'employee_yang_dituju'
      }
    });
    // visitor.belongsTo(models.employee, { name: 'nama_employee', foreignKey: 'employee_yang_dituju' })
      //   employee.hasOne(models.visitor,  {
      //   foreignKey: {
      //     name: 'employee_yang_dituju'
      //   }
      // })
  };
  return visitor;
};