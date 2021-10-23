module.exports = (sequelize, Sequelize) => {
    const carrera = sequelize.define("carrera", {
      IDcarrera: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Area: {
        type: Sequelize.INTEGER
      }
    });
  
    return carrera;
  };