const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config');

// Importar todos los modelos
const User = require('./User')(sequelize, DataTypes);
const Emocion = require('./Emocion')(sequelize, DataTypes);
const Cancion = require('./Cancion')(sequelize, DataTypes);
const RecomendacionHistorial = require('./RecomendacionHistorial')(sequelize, DataTypes);

// Asociaciones
if (User.associate) User.associate({ RecomendacionHistorial });
if (Emocion.associate) Emocion.associate({ Cancion, RecomendacionHistorial });
if (Cancion.associate) Cancion.associate({ Emocion, RecomendacionHistorial });
if (RecomendacionHistorial.associate) RecomendacionHistorial.associate({ User, Cancion, Emocion });

// Sincronización
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database sincronizada');
  })
  .catch((err) => {
    console.log('Database no sincronizada', err);
  });

// Exportar modelos y sequelize
module.exports = {
  sequelize,
  User,
  Emocion,
  Cancion,
  RecomendacionHistorial
};
