const {Sequelize}=require("sequelize");

const sequelize = new Sequelize(
    "proyecto",// Database name
    "root",// Username
    "",// Password
    {
        host:"127.0.0.1",
        dialect: "mysql",
        logging: false,
        define:{
            freezeTableName: true
        }
    }
);
module.exports = sequelize;