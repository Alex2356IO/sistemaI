module.exports = (sequelize, Sequelize) => {
    const departamento = sequelize.define("departamento",{
        IDdepartamento: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        Nombre: {
            type: Sequelize.STRING
        },
        Carrera: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
//foreing key carrera, carrera(IDcarrera)

        });
        return departamento;
};