const sequelize = require('./../config/db');
const crudUtils = require("./../utils/crud-utils");

exports.getAll = function (tableName, cb) {
  sequelize.query(`SELECT * FROM ${tableName}`, { type: sequelize.QueryTypes.SELECT })
    .then(data => {
      cb(false, data);
    }).catch(err => {
      console.log(err);
      cb(err, null)
    })
}


exports.getById = async function (tableName, id, cb) {
  if(isNaN(id)){
      throw new Error("invalid id");
  } else {
  const data = await sequelize.query(`select * from ${tableName} where id = ${id}`, { type: sequelize.QueryTypes.SELECT });
  if (data.length > 0) {
    // console.log("data found from "+tableName);
    // console.log(data[0])
    cb(false, data[0]);
  } else {
    console.log("data not found from "+tableName);
    cb(false, { message: "Given id is not available in database" });
  }
}
}

exports.post = function (tableName, postData, cb) {
  console.log("post data")

  console.log(postData);
  
  crudUtils.getUpdateString(postData, (updateData) => {

    sequelize.query(`insert into ${tableName} SET ${updateData}`).then(([createdId, rows]) => {
      console.log(createdId, rows);
        cb(false, { success: createdId > 0 });
    }).catch(err => {
      console.log(err);
      cb(err);
    })
  });
}

exports.put = function (tableName, putData, cb) {
  crudUtils.getUpdateString(putData, (updateData) => {

    sequelize.query(`UPDATE ${tableName} SET ${updateData} WHERE id=${id}`).then(([results]) => {
      console.log(results);
      cb(false, results);
    }).catch(err => {
      console.log(err);
      cb(err);
    })
  });
}

exports.delete = function (tableName, id, cb) {
  sequelize.query(`DELETE from ${tableName} where id=${id}`).then(([results]) => {
    console.log(results);
    cb(false, results.affectedRows);
  }).catch(err => {
    console.log(err);
    cb(err);
  })

}


