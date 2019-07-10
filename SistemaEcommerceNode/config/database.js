const Sequelize = require("sequelize");

let sequelize  = new Sequelize("ecommerce_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    operatorAliases: false,
    pool: {
        max: 20,
        min: 5, 
        acquire: 30000,
        idler: 10000
    }
});

sequelize.sync();
module.exports = sequelize;