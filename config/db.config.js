module.exports = {
  
  HOST: process.env.NODE_ENV = 'dev'?  '127.0.0.1':
   process.env.NODE_ENV='production'?"mysqldgae.mysql.database.azure.com":"noenv",
    USER: process.env.USERDB,
    PASSWORD: process.env.PWORDDB,
    DB: "sistemainscripciones",
    dialect: "mysql",
    PORT: "3306" ,
    pool: {
      max: 10000,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };