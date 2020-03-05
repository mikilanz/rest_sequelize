'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    nama_employee: DataTypes.STRING,
    nip: DataTypes.INTEGER,
    tanggal_join: DataTypes.DATE
  }, {
    // freezeTableName: true
  });

  employee.associate = function(models) {
    // associations can be defined here
    // employee.hasMany(models.visitor, {
    //   foreignKey: {
    //     name: 'employee_yang_dituju'
    //   }
    // });
  };
  return employee;
};