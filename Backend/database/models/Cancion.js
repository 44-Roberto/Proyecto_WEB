module.exports = (sequelize, DataTypes) => {
  const Cancion = sequelize.define('Cancion', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artista: {
      type: DataTypes.STRING,
    },
    url_spotify: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    tableName: 'canciones',
    timestamps: false
  });

  Cancion.associate = (models) => {
    Cancion.belongsToMany(models.Emocion, {
  through: 'canciones_emociones',
  foreignKey: 'cancion_id',
  otherKey: 'emocion_id',
  timestamps: false
  });
    Cancion.hasMany(models.RecomendacionHistorial, {
      foreignKey: 'cancion_id'
    });
  };

  return Cancion;
};
