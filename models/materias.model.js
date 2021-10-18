module.exports = (sequelize, Sequelize) => {
    const Materias = sequelize.define("materias", {
      idmateria: {
        type: Sequelize.INTEGER,
        primaryKey :true 
      },
      nombre: {
        type: Sequelize.STRING
      },
      semestre: {
        type: Sequelize.STRING
      },
      creditos:{
          type:Sequelize.STRING
      },
      idcarrera:{
          type:Sequelize.INTEGER
        
           }
    });
  
    return Materias;
  };