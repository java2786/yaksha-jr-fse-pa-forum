const Sequelize = require('sequelize');

const db = require("./db-server");

  // db.name = "forum_1";
  // db.user = "root";
  // db.pwd = "root";
  // db.port = 3306;
  // db.host = "localhost";

const sequelize = new Sequelize(db.name, db.user, db.pwd, {
  define: { 
    engine: 'MYISAM',
    timestamps: false 
  },
  host: db.host,
  port: db.port,
  dialect: 'mysql'  /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
}, {
  pool: {
    max: 3,
    min: 1,
    acquire: 30000,
    idle: 10000
  }
  // , define: {
  //   // Use `timestamps` field if you want `createdAt` and `updatedAt` columns to be created.
  //   // true by default
  //   timestamps: false,
  // }
  });// create table if not exists


// Drop all tables
// sequelize.drop()

// Sync all models that aren't already in the database
// sequelize.sync()

// Force sync all models
// sequelize.sync({force: true})
// require('./../entities')

// alters all tables
// sequelize.sync({ alter: true })

module.exports = sequelize;