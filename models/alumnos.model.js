module.exports = (sequelize, Sequelize) => {
    const Alumnos = sequelize.define("alumnos", {
      numcuenta: {
        type: Sequelize.STRING,
        primaryKey :true 
      },
      nombre: {
        type: Sequelize.STRING
      },
      fechanac: {
        type: Sequelize.STRING
      },
      domicilio: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      }
    });
  
    return Alumnos;
  };