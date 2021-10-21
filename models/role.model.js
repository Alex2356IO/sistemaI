module.exports = (sequelize, Sequelize) => {
    const role = sequelize.define("role", {
      Id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Nombre: {
        type: Sequelize.STRING
      },
    });
  
    return role;
  };