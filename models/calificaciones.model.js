module.exports = (sequelize, Sequelize) => {
    const calificaciones = sequelize.define("calificaciones", {
      NumCuenta: {
        type: Sequelize.INTEGER,
        primaryKey: true 
      },
      CalificacionTotal: {
        type: Sequelize.INTEGER
      },
      CreditosTotales: {
        type: Sequelize.INTEGER
      },
    });
  //foreign key con Numcuenta en cursa(NumCuenta) 
    return calificaciones;
  };