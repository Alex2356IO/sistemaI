module.exports = (sequelize, Sequelize) => {
    const alumno = sequelize.define("alumno", {
      NumCuenta: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      Nombre: {
        type: Sequelize.STRING
      },
      Fechanac: {
        type: Sequelize.STRING
      },
      Domicilio: {
        type: Sequelize.STRING
      },
      Correo: {
        type: Sequelize.STRING
      },
      Telefono: {
        type: Sequelize.STRING
      },
    });
  
    return alumno;
  };