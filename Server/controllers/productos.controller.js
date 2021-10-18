const db = require("../models");
const productos= db.productos;
const {Op} = require("sequelize");


//Agregar producto
exports.newProductos =(req,res) => {


 productos.create({
        nombre: req.body.nombre,
        costo: req.body.costo,
        precio: req.body.precio,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
        categoria: req.body.categoria,
        urlimg: req.body.urlimg
      })
      res.send({ message: "Producto se guardo correctamente" })
.catch(err => {
        res.status(500).send({ message: err.message });
      });
}


// Todos los productos 
exports.getProductos=(req,res) => {


   productos.findAll({ raw: true }).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Algun error ocurrio cuando traiamos los productos"
    });
}
  );

}

// Por categoria 
exports.getProductoscat=(req,res) => {
    productos.findAll({ 
        where:{
            categoria:req.body.categoria

    }
    }).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algun error ocurrio cuando traiamos los productos"
        });
    }
      );


}
//Busqueda por nombre 
exports.getProductosnombre=(req,res) => {
    productos.findAll({ 
        where:{
            nombre: {[Op.substring]: req.body.nombre }
            
            }
           }
    ).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algun error ocurrio cuando traiamos los productos"
        });
    }
      );


}

//Busqueda por precio rango


exports.getProductosprecio=(req,res) => {
    productos.findAll({ 
        where:{
            precio: {[Op.between]: [req.body.precioI,req.body.precio]}
            }
           }
    ).then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algun error ocurrio cuando traiamos los productos"
        });
    }
      );


}

