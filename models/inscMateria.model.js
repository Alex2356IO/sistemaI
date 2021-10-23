module.exports = (sequelize, Sequelize) => {
    const inscMateria = sequelize.define("inscMateria",{
        NumCuenta: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        IDhorario: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        Calificacion: {
            type: Sequelize.INTEGER,
        },
        TipoExamen: {
            type: Sequelize.INTEGER,
        },
//foreing key Numcuenta,grpo en inscprofe, cursa(numcuenta,grupo)
        });
        return inscMateria;
    };