const getClientIp = (req) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  return ip === '::1' ? '127.0.0.1' : ip;
};

export { getClientIp };