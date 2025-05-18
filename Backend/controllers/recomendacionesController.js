const { Emocion, Cancion, RecomendacionHistorial, sequelize } = require('../database/models');

// POST /api/recomendaciones
const generarRecomendaciones = async (req, res) => {
  const { emocion, usuario_id } = req.body;

  try {
    const emocionData = await Emocion.findOne({ where: { nombre: emocion } });

    if (!emocionData) {
      return res.status(404).json({ message: 'Emoción no encontrada' });
    }

    const canciones = await emocionData.getCancions({
      order: sequelize.literal('RAND()'),
      limit: 5
    });

    // Guardar historial
    for (const cancion of canciones) {
      await RecomendacionHistorial.create({
        usuario_id,
        cancion_id: cancion.id,
        emocion_detectada_id: emocionData.id
      });
    }

    res.json(canciones);
  } catch (error) {
    console.error('Error al generar recomendaciones:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


const obtenerHistorial = async (req, res) => {
  const { usuarioId } = req.params;

  try {
    const historial = await RecomendacionHistorial.findAll({
      where: { usuario_id: usuarioId },
      include: ['Cancion', 'Emocion'],
      order: [['fecha', 'DESC']]
    });

    res.json(historial);
  } catch (error) {
    console.error('Error al obtener historial:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { generarRecomendaciones, obtenerHistorial };
