const employee = require("../models").employee;
const visitor = require("../models").visitor;

module.exports = function(router) {
  router.get("/visitor", (req, res) => {
    visitor.findAll({
      // include: [employee]
    //   on: {
    //     col1: sequelize.where(sequelize.col("visitor.employee_yang_dituju"), "=", sequelize.col("employee.nama_employee"))
    // },
    })
      .then(vis => {
        res.json(vis);
      })
      .catch(err => res.json(err));
  });

//   router.get("/employee/:id", (req, res) => {
//     employee.findAll({
//       where: { id: req.params.id }
//     })
//       .then(physician => {
//         res.json(physician[0]);
//       })
//       .catch(err => res.json(err));
//   });

//   router.post("/employee", (req, res) => {
//     employee.create({
//       name: req.body.name
//     })
//       .then(res => {
//         res.json(res);
//       })
//       .catch(err => res.json(err));
//   });

//   router.put("/employee/:id", (req, res) => {
//     employee.update({ name: req.body.name }, { where: { id: req.params.id } })
//       .then(updatedPhysician => {
//         res.json(updatedPhysician);
//       })
//       .catch(err => res.json(err));
//   });

//   router.delete("/employee/:id", (req, res) => {
//     employee.destroy({
//       where: { id: req.params.id }
//     })
//       .then(physician => {
//         res.json(physician);
//       })
//       .catch(err => res.json(err));
//   });
};