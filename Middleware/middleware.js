const jwt = require('jsonwebtoken');

const  authMiddleware = (req, res, next) =>{
    
  const authHeader = req.headers.authorization;

   console.log("auth login",authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token manquant ou invalide' });
  }

  const token = authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Stocker les infos décodées dans req.user
    next(); // Passer au prochain middleware ou contrôleur
  } catch (error) {
    return res.status(403).json({ message: 'Token invalide ou expiré' });
  }
}

module.exports = {
   authMiddleware
}
