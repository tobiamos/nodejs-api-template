module.exports = {
	env: 'development',
	db: process.env.DBURI,
	port: process.env.PORT,
	loglevel: process.env.LOGLEVEL,
	jwtsecret: process.env.JWTSECRET,
};
