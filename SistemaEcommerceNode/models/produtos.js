const Sequelize = require("sequelize");
const db = require("../config/database");

const Produto = db.define("produto", {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estoque: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Produto;