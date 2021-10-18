module.exports = (sequelize, Sequelize) => {
    const Carreras = sequelize.define("carreras", {
      idcarrera: {
        type: Sequelize.INTEGER,
        primaryKey :true 
      },
      nombre: {
        type: Sequelize.STRING
      },
      area: {
        type: Sequelize.STRING
      }
    });
  
    return Carreras;
  };