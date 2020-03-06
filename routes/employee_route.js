const employee = require("../models").employee;
const visitor = require("../models").visitor;
const { Op } = require("sequelize");

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
          'messages': 'Data is Empty',
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

  router.get("/employee/:id", async function (req, res) {
    try {
      const employees = await employee.findAll({
        where: { id: req.params.id }
      });
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
        nama_employee,
        nip,
        tanggal_join
      });
    if (employees) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Data employee berhasil ditambahkan',
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

  router.patch('/employee/:id', async function (req, res, next) {
    try {
      const {
        nama_employee,
        nip,
        tanggal_join
      } = req.body;

      const employees = await employee.update({
        nama_employee: nama_employee,
        nip: nip,
        tanggal_join: tanggal_join
      },{ where: { id: req.params.id } });
    if (employees != 0) {
      res.status(201).json({
        'status': 'OK',
        'messages': 'Data Employee id ='+req.params.id+' berhasil diupdate',
        'data': 'Affected rows: '+employees,
      })
    } else{
      res.status(404).json({
        'status': '404',
        'messages': 'ID not found',
        'data': 'Affected rows: '+employees,
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
  router.patch('/employee', async function (req, res, next) {
    
     res.status(405).json({
       'status': '405 ',
       'messages': 'method not allowed. please use param id',
       'data': {},
     })
   
  });


  router.delete('/employee/:id', async function (req, res, next) {
    try {
      
      const employees = await employee.destroy({ where: {
        id: req.params.id
      }})
      if (employees != 0) {
        res.json({
          'status': '200',
          'messages': 'Data Employee id = '+req.params.id+' berhasil dihapus',
          'data': 'Affected rows: '+employees,
        })
      } else{
        res.json({
          'status': '404',
          'messages': 'Data Employee id = '+req.params.id+' tidak ditemukan',
          'data': 'Affected rows: '+employees,
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

  router.get("/summary_visit", async function (req, res) {
    try {
      var mix = [];
      const employees = await employee.findAll({});

      for(var i = 0 ; i < employees.length ; i++){
        let obj = new Object;
        const visitor_count = await visitor.count({

          where: {
            employee_yang_dituju: employees[i]['nama_employee'],
            tanggal_visit: {
              [Op.between]: [req.query.date1, req.query.date2]
            }
          }
        });

        obj.employee_name = employees[i]['nama_employee'];
        obj.nip           = employees[i]['nip'];
        obj.join_date     = employees[i]['tanggal_join'];
        obj.visitor_count = visitor_count;

        mix.push(obj);
      }


      if (mix.length !== 0) {
        res.json({
          'status': '200',
          'messages': 'Success',
          'data': mix
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
};