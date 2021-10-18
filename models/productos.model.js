module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define("productos", {

        idproducto :{
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true
         },
      nombre: {
        type: Sequelize.STRING
      },
      costo: {
        type: Sequelize.FLOAT(11,2)
      },
      precio: {
        type: Sequelize.FLOAT(11,2)
      },
      stock: {
   type: Sequelize.STRING
            },
     descripcion: {
        type: Sequelize.STRING
      },
     categoria: {
        type: Sequelize.STRING
      },
      urlimg: {
        type: Sequelize.STRING
      }
    });
  
    return Productos;
  };