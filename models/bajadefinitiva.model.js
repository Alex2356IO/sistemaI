module.exports = (sequelize, Sequelize) => {
    const bajadefinitiva = sequelize.define("bajadefinitiva", {
      NumCuenta: {
        type: Sequelize.INTEGER,
        primarykey: true 
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
      }
    });
  //foreign key numcuenta, en cursa (numcuenta)
    return bajadefinitiva;
  };