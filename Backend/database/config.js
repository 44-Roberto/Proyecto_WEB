const {Sequelize}=require("sequelize");

const sequelize = new Sequelize(
    "proyecto",// Database name
    "root",// Username
    "root123",// Password
    {
        host:"localhost",
        port: 3307,
        dialect: "mysql",
        logging: false,
        define:{
            freezeTableName: true
        }
    }
);

module.exports = sequelize;