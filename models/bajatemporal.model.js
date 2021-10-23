module.exports = (sequelize, Sequelize) => {
    const bajatemporal = sequelize.define("bajatemporal", {
     NumCuenta: {
        type: Sequelize.INTEGER,
        primaryKey: true 
         },
     IDcarrera: {
        type: Sequelize.INTEGER,
        primarykey: true
        },
     AnioInscripcion: {
         type: Sequelize.STRING
         },
     Modalidad: {
        type: Sequelize.STRING
        },
     //foreign key a numcuenta, Idcarrera, en Alumno,carrera(numcuenta,idcarrera)
    });
  
    return bajatemporal;
  };