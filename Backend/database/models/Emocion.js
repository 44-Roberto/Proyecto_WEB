module.exports = (sequelize, DataTypes) => {
  const Emocion = sequelize.define('Emocion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  }, {
    tableName: 'emociones',
    timestamps: false
  });

  Emocion.associate = (models) => {
    Emocion.belongsToMany(models.Cancion, {
  through: 'canciones_emociones',
  foreignKey: 'emocion_id',
  otherKey: 'cancion_id',
  timestamps: false
});
    Emocion.hasMany(models.RecomendacionHistorial, {
      foreignKey: 'emocion_detectada_id'
    });
  };

  return Emocion;
};
