
const authMiddleware = (req, res, next) => {
    const publicRoutes = ['/addressForm'];
    if (publicRoutes.includes(req.path)) {
      return next();
    }
  
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    // Token verification logic (pseudo-code)
    // const verified = verifyToken(token);
    // if (!verified) {
    //   return res.status(401).json({ message: 'Unauthorized' });
    // }
  
    next();
  };
  
  module.exports = authMiddleware;
  