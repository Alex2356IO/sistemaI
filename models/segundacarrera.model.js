module.exports = (sequelize, Sequelize) => {
    const segcarrera = sequelize.define("segcarrera", {
      NumCuenta: {
        type: Sequelize.INTEGER,
        primarykey: true
      },
        IDcarrera: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      AnioInsc: {
        type: Sequelize.STRING
      },
      Modalidad: {
          type: Sequelize.STRING
      },
    });
  // foreign key numcuenta, IDcarrera, en cursa, carrera (numcuenta,Idcarrera)
    return segcarrera;
  };