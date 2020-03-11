var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

   //http://localhost:3000/api/employees/all
  router.get('/all', (req, res, next) => {
    /*
    empModel.xyz( (err, docs)=>{
      return res.status(200).json(docs);
    });
    */
   empModel.getEmployees((err, users)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(users);
  });
  });// all


  // http://localhost:3000/api/employees/byid/:id
  router.get('/byid/:id',(req, res)=>{
    var id =  req.params.id ;
    empModel.getEmployeesById(id, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });// getBYId
  });


  // http://localhost:3000/api/employees/bycompany/:company
  router.get('/bycompany/:company',(req, res)=>{
    var comp =  req.params.comp ;
    empModel.getEmployeesByCompany(comp, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });// getBYId
  });

  
  // http://localhost:3000/api/employees/delete/:id
  router.delete('/delete/:id', (req, res)=>{
    var id = req.params.id;
    empModel.removeEmployee(id, (err, deletedDoc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(deletedDoc);
    }); 
  });//delete

  
  return router;
}

module.exports = initEmployee;
