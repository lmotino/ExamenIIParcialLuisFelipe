var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');
  lib.getEmployees = (handler)=>{
    // implementar
    // obtener todos los documentos

    empColl.find({}).toArray(handler);
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age

    var query = { "_id": new ObjectID(id) };
    empColl.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    ); //findOne
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
    // implementar
    // solo mostrar name, email, company
  
    var query = { "company": new company(company) };
    empColl.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);
      }
    ); 


    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar
    // obtener todos los documentos que contenga 
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección

    var query = {"_id": new ObjectID(id)};
    empColl.deleteOne(
      query,
      (err, rslt)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, rslt.result);
      }
    ); //deleteOne
    //return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
