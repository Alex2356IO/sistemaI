const { authJwt } = require("../middleware");
const controllerp = require("../controllers/productos.controller");



module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", process.env.HOST); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type");
      next();
    });
  //AGREGAR NUEVO PRODUCTO
  app.post(
    "/api/addProduct",
  [authJwt.verifyToken, authJwt.isAdmin],
    controllerp.newProductos
    );
    
    // Todos los productos 
    app.get(
      "/api/allProduct",
      controllerp.getProductos 
    );
    
    //Productos por categoria 
    
    app.post(
    "/api/catProduct",
    controllerp.getProductoscat
    );
    
    //Productos por nombre (busqueda)
    app.post(
      "/api/busquedaProduct",
      controllerp.getProductosnombre
    );
    
    //Productos por precio en rango
    app.post(
      "/api/ProductbyPrice",
      controllerp.getProductosprecio
    );


}