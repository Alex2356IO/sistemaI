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

db.usuario = require("../models/usuario.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.alumno = require("../models/alumno.model.js")(sequelize,Sequelize);
db.carrera = require("../models/carrera.model.js")(sequelize,Sequelize);
db.materia = require("../models/materia.model.js")(sequelize,Sequelize);
db.bajadefinitiva = require ("../models/bajadefinitiva.model.js")(sequelize,Sequelize);
db.bajatemporal = require ("../models/bajatemporal.model.js")(sequelize,Sequelize);
db.calificaciones = require ("../models/calificaciones.model.js")(sequelize,Sequelize);
db.cursa = require ("../models/cursa.model.js")(sequelize,Sequelize);
db.departamento = require ("./departamento.model.js")(sequelize,Sequelize);
db.egresado = require ("../models/egresado.model.js")(sequelize,Sequelize);
db.examenExtra = require ("../models/examenextra.model.js")(sequelize,Sequelize);
db.horario = require ("../models/horario.model.js")(sequelize,Sequelize);
db.inscMateria = require ("../models/inscMateria.model.js")(sequelize,Sequelize);
db.inscProfe = require ("../models/inscProfe.model.js")(sequelize,Sequelize);
db.jefedepto = require ("../models/jefedepto.model.js")(sequelize,Sequelize);
db.planestudios = require ("../models/planestudios.model.js")(sequelize,Sequelize);
db.profesor = require ("../models/profesor.model.js")(sequelize,Sequelize);
db.segcarrera = require ("../models/segundacarrera.model.js")(sequelize,  Sequelize);

//Relación usuario(idusuario) ->roles(idrole) muchos a muchos en nueva tabla "user_roles"
db.role.belongsToMany(db.usuario, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.usuario.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

/*Relacion de la primarykey idcarrera en la tabla materias 
con la columna idcarrera en la tabla carrera (belongsTo)*/
db.materia.belongsTo(db.carrera,
  {through:"carrera",
  foreignKey:"IDcarrera",
});

db.planestudios.belongsTo(db.carrera,
  {through:"carrera",
  foreignKey:"IDcarrera",
});

db.departamento.belongsTo(db.carrera,
  {through:"carrera",
  foreignKey:"IDcarrera",
});

db.profesor.belongsTo(db.departamento,
  {through:"departamento",
  foreignKey:"IDprofesor",
});

//para jededepartamento
db.departamento.belongsToMany(db.profesor,
  {through:"jefedepto",
  foreignKey:"IDdepartamento",
  otherKey:"IDprofesor",
});

db.profesor.belongsToMany(db.departamento,
  {through:"jefedepto",
  foreignKey:"IDprofesor",
  otherKey:"IDdepartamento",
});

//para tabla inscripcion profe
db.materia.belongsToMany(db.profesor,
  {through:"inscProfe",
  foreignKey:"IDmateria",
  otherKey:"IDprofesor",
});

db.profesor.belongsToMany(db.horario,
  {through:"inscProfe",
  foreignKey:"IDprofesor",
  otherKey:"IDhorario",
});

// para cursa

db.alumno.belongsToMany(db.carrera,
  {through:"cursa",
  foreignKey:"NumCuenta",
  otherKey:"IDcarrera",
});

db.carrera.belongsToMany(db.alumno,
  {through:"cursa",
  foreignKey:"IDcarrera",
  otherKey:"NumCuenta",
});

//para iinscripcion materia

db.cursa.belongsToMany(db.inscProfe,
  {through:"inscMateria",
  foreignKey:"NumCuenta",
  otherKey:"IDhorario",
});

db.inscProfe.belongsToMany(db.cursa,
  {through:"inscMateria",
  foreignKey:"IDhorario",
  otherKey:"NumCuenta",
});

//calificaciones
db.calificaciones.belongsTo(db.cursa,
  {through:"cursa",
  foreignKey:"NumCuenta",
});

//egresado

db.alumno.belongsToMany(db.carrera,
  {through:"egresado",
  foreignKey:"NumCuenta",
  otherKey:"IDcarrera",
});

db.carrera.belongsToMany(db.alumno,
  {through:"egresado",
  foreignKey:"IDcarrera",
  otherKey:"NumCuenta",
});

//baja temporal
db.alumno.belongsToMany(db.carrera,
  {through:"bajatemporal",
  foreignKey:"NumCuenta",
  otherKey:"IDcarrera",
});

db.carrera.belongsToMany(db.alumno,
  {through:"bajatemporal",
  foreignKey:"IDcarrera",
  otherKey:"NumCuenta",
});

//segunda carrera

db.alumno.belongsToMany(db.carrera,
  {through:"segcarrera",
  foreignKey:"NumCuenta",
  otherKey:"IDcarrera",
});

db.carrera.belongsToMany(db.alumno,
  {through:"segcarrera",
  foreignKey:"IDcarrera",
  otherKey:"NumCuenta",
});

//examenextra

db.cursa.belongsToMany(db.materia,
  {through:"examenExtra",
  foreignKey:"NumCuenta",
  otherKey:"IDmateria",
});

db.materia.belongsToMany(db.profesor,
  {through:"examenExtra",
  foreignKey:"IDmateria",
  otherKey:"NumCuenta",
});



/*Lo mismo pero la referencia se hace alreves (hasOne) 
db.carreras.hasOne(db.materias,{
  through:"materias",
  foreignKey:"idcarrera"
  })
  */
db.ROLE = ["user", "admin", "moderator"];

module.exports = db;