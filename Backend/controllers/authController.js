const { User } = require('../database/models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || '1273020o1221120';// La clave son los dos carnets separados por una o

const login = async (req, res) => {
  const { email, contrasena } = req.body;
console.log('nombre_usuario:', email);
console.log('contrasena:', contrasena);
console.log('llego aca');
  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const passwordMatch = await bcrypt.compare(contrasena, user.contrasena_hash);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar JWT
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    res.json({ token, userId: user.id});

  } catch (error) {
    console.error('Error durante el login:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const register = async (req, res) => {
  const { nombre_usuario, contrasena, email } = req.body;

  try {
    const existingUser = await User.findOne({
      where: {
        [require('sequelize').Op.or]: [
          { nombre_usuario: nombre_usuario },
          { email: email },
        ],
      },
    });

    if (existingUser) {
      return res.status(409).json({ message: 'El nombre de usuario o el email ya están registrados' });
    }

    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const newUser = await User.create({
      nombre_usuario,
      contrasena_hash: hashedPassword,
      email,
    });

    const token = jwt.sign({ userId: newUser.id }, secretKey, { expiresIn: '1h' });

    res.status(201).json({ message: 'Usuario registrado exitosamente', token });

  } catch (error) {
    console.error('Error durante el registro:', error);
    res.status(500).json({ message: 'Error en el servidor al registrar el usuario' });
  }
};

module.exports = { login, register  };