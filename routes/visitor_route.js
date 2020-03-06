const employee = require("../models").employee;
const visitor = require("../models").visitor;

module.exports = function(router) {

  router.post('/visitor', async function (req, res, next) {
    try {
      const {
        nama_visitor,
        employee_yang_dituju,
        tanggal_visit
      } = req.body;

      const visitors = await visitor.create({
        nama_visitor,
        employee_yang_dituju,
        tanggal_visit
      });
    if (visitors) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Data visitor berhasil ditambahkan',
        'data': visitors,
      })
    }
   } catch (err) {
     res.status(400).json({
       'status': 'ERROR',
       'messages': err.message,
       'data': {},
     })
   }
  });

};