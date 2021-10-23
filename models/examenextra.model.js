module.exports = (sequelize, Sequelize) => {
    const examenex = sequelize.define("examenex", {
      NumCuenta: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      IDmateria: {
        type: Sequelize.INTEGER,
        primarykey: true
      },
      Fecha: {
        type: Sequelize.DATE
      },
      IDprofesor: {
        type: Sequelize.INTEGER,
        primarykey: true
      },
      TipoExamen: {
        type: Sequelize.STRING
    },
//foreign key numcuenta,IDmateria,IDprofesor, en cursam , materia,profesor(IDprofesor,numcuenta,IDmateria)
    });
  
    return examenex;
  };