const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config.js"); 

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre_usuario: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  contrasena_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  fecha_registro: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
 
}, {
  sequelize,
  modelName: "User", 
  tableName: "Users", 
  timestamps: false, 
  paranoid: false,   
});

module.exports = User;