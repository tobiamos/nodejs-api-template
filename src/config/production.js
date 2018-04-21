module.exports = {
	env: 'production',
	db: process.env.DBURI,
	port: process.env.PORT,
	loglevel: process.env.LOGLEVEL,
	jwtsecret: process.env.JWTSECRET,
};
