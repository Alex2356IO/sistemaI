module.exports = (sequelize, Sequelize) => {
const jefedepto = sequelize.define("jefedepto",{
    IDdepto: {
        type: Sequelize.INTEGER,
        primarykey: true
    },
    IDprofesor: {
        type: Sequelize.INTEGER,
        primarykey: true
    },

    //agregar foreignkey a estos dos ID con profesor y carrera
});
return jefedepto;
};