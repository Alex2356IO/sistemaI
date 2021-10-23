module.exports = (sequelize, Sequelize) => {
    const cursa = sequelize.define("cursa", {
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
    });
  //foreign key numcuenta, idcarrera en alumno, carrera(numcuenta,IDcarrera)
    return cursa;
  };