const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_SCHEMA || 'postgres',
                                process.env.DB_USER || 'postgres',
                                process.env.DB_PASSWORD || 'postgres',
                                {
                                    host: process.env.DB_HOST || 'localhost',
                                    port: process.env.DB_PORT || 5432,
                                    dialect: 'postgres',
                                    
                                    define: {
                                        timestamps: false
                                    },
                                    pool: {
                                        min: 0,
                                        max: 5,
                                        acquire: 30000,
                                        idle: 10000
                                    },
                                    operatorAliases: false
                                }
);
const Person = sequelize.define('persons', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true
    },
});
module.exports = {
    sequelize: sequelize,
    Person: Person
};
