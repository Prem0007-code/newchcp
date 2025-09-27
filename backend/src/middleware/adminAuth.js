module.exports = function adminAuth(req, res, next) {
  const headerToken = req.header('x-admin-token');
  const adminToken = process.env.ADMIN_TOKEN;

  if (!adminToken) {
    return res.status(500).json({ error: 'Server misconfiguration: ADMIN_TOKEN not set' });
  }

  if (!headerToken || headerToken !== adminToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  return next();
};
