const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    port: config.PORT,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/usuario.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.productos = require("../models/productos.model.js")(sequelize, Sequelize);
db.alumnos = require("../models/alumnos.model.js")(sequelize,Sequelize);
db.carreras = require("../models/carreras.model.js")(sequelize,Sequelize);
db.materias = require("../models/materias.model.js")(sequelize,Sequelize);

//Relación usuario(idusuario) ->roles(idrole) muchos a muchos en nueva tabla "user_roles"
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
/*Relacion de la primarykey idcarrera en la tabla materias 
con la columna idcarrera en la tabla carreras (belongsTo)*/
db.materias.belongsTo(db.carreras,
  {through:"carreras",
  foreignKey:"idcarrera",
});
/*Lo mismo pero la referencia se hace alreves (hasOne) 
db.carreras.hasOne(db.materias,{
  through:"materias",
  foreignKey:"idcarrera"
  })
  */

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;