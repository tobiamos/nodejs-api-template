require('dotenv').config({ path: '.env' });
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
const chalk = require('./config/chalk');
const config = require('./config');

const morgan = require('morgan');
const { sendJSONResponse } = require('./helpers');
const logger = require('./config/logger');

require('./models');

if (config.env !== 'test') {
	app.use(morgan('dev', { stream: logger.stream }));
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '52428800' }));
const apiRoutes = require('./router');
app.use('/api/v2', apiRoutes);
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err, req, res, next) => {
	if (config.env !== 'test') {
		console.error('THIS IS ERR', err);
	}
	if (err.isBoom) {
		const message = err.data[0].message;
		sendJSONResponse(res, err.output.statusCode, null, req.method, message);
	} else if (err.status === 404) {
		sendJSONResponse(res, err.status, null, req.method, 'Not Found');
	} else {
		sendJSONResponse(res, 500, null, req.method, 'Something Went Wrong!');
	}
});

app.listen(config.port, () => console.log(chalk.blue('APP RUNNING ON '), config.port));

module.exports = { app };
