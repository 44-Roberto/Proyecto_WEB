module.exports = (sequelize, DataTypes) => {
  const RecomendacionHistorial = sequelize.define('RecomendacionHistorial', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
    },
    cancion_id: {
      type: DataTypes.INTEGER,
    },
    emocion_detectada_id: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'recomendaciones_historial',
    timestamps: false
  });

  RecomendacionHistorial.associate = (models) => {
    RecomendacionHistorial.belongsTo(models.User, {
      foreignKey: 'usuario_id'
    });
    RecomendacionHistorial.belongsTo(models.Cancion, {
      foreignKey: 'cancion_id'
    });
    RecomendacionHistorial.belongsTo(models.Emocion, {
      foreignKey: 'emocion_detectada_id'
    });
  };

  return RecomendacionHistorial;
};
