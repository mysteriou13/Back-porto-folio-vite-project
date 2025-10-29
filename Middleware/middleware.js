require('dotenv').config(); // Charger les variables d'environnement
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(403).json({ message: 'Token manquant' });
  }

  const token = authHeader.split(' ')[1]; // extraire le JWT
  if (!token) {
    return res.status(403).json({ message: 'Token invalide' });
  }

  try {
    // ⚠️ Vérifier que process.env.JWT_SECRET est défini
    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET non défini dans les variables d’environnement');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("error token",error);
    return res.status(403).json({ message: 'Token invalide ou expiré' });
  }
};

module.exports = {
  authMiddleware,
};
