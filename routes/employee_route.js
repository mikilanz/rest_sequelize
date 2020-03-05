const employee = require("../models").employee;
const visitor = require("../models").visitor;

module.exports = function(router) {
  router.get("/employee", async function (req, res) {
    try {
      const employees = await employee.findAll({});
      if (employees.length !== 0) {
        res.json({
          'status': '200',
          'messages': 'Success',
          'data': employees
        })
      } else {
        res.json({
          'status': '400',
          'messages': 'EMPTY',
          'data': {}
        })
      }
    } catch (err) {
      res.json({
        'status': '400',
        'messages': err.messages,
        'data': {}
      })
    }
  });

  router.post('/employee', async function (req, res, next) {
    try {
      const {
        nama_employee,
        nip,
        tanggal_join
      } = req.body;

      const employees = await employee.create({
        // nama_employee: req.body.nama_employee,
        // nip: req.body.nip,
        // tanggal_join: req.body.tanggal_join
        nama_employee,
        nip,
        tanggal_join
      });
    if (employees) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'User berhasil ditambahkan',
        'data': employees,
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

  // router.get("/employee/:id", (req, res) => {
  //   employee.findAll({
  //     where: { id: req.params.id }
  //   })
  //     .then(physician => {
  //       res.json(physician[0]);
  //     })
  //     .catch(err => res.json(err));
  // });

  // router.post("/employee", (req, res) => {
  //   employee.create({
  //     name: req.body.name
  //   })
  //     .then(res => {
  //       res.json(res);
  //     })
  //     .catch(err => res.json(err));
  // });

  // router.put("/employee/:id", (req, res) => {
  //   employee.update({ name: req.body.name }, { where: { id: req.params.id } })
  //     .then(updatedPhysician => {
  //       res.json(updatedPhysician);
  //     })
  //     .catch(err => res.json(err));
  // });

  // router.delete("/employee/:id", (req, res) => {
  //   employee.destroy({
  //     where: { id: req.params.id }
  //   })
  //     .then(physician => {
  //       res.json(physician);
  //     })
  //     .catch(err => res.json(err));
  // });
};