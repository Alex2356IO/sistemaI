module.exports = (sequelize, Sequelize) => {
    const materia = sequelize.define("materia", {
      IDmateria: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Semestre: {
        type: Sequelize.STRING
      },
      Creditos:{
          type:Sequelize.STRING
      },
      Tipo: {
        type: Sequelize.STRING
      },
      IDcarrera:{
          type:Sequelize.INTEGER,
          primarykey: true
      }
      //foreing key IDcarrera references carrera(IDcarrera)
    });
  
    return materia;
  };