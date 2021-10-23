module.exports = (sequelize, Sequelize) => {
    const inscProfe = sequelize.define("inscProfe",{
        Grupo: {
            type: Sequelize.STRING,
            primarykey: true
        },
        IDmateria: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        IDprofesor: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        IDhorario: {
            type: Sequelize.INTEGER,
            primarykey: true
        },
        Periodo: {
            type: Sequelize.STRING
        },
//foreing key IDmateria,IDprofesor,IDhoraro, en materia, profesor, horario(IDmateria,IDprofesor,IDhorario)

        });
        return inscProfe;
};