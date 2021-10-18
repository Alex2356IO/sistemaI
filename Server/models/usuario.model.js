module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuarios", {
      usuario: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      pword: {
        type: Sequelize.STRING
      }
    });
  
    return Usuario;
  };