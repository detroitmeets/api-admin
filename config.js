const { PORT, MONGODB_URI, ACCESS_CONTROL_ALLOW_ORIGIN } = process.env;

module.exports = {
  PORT: Number(PORT || 3000),
  MONGODB_URI,
  ACCESS_CONTROL_ALLOW_ORIGIN,
};
