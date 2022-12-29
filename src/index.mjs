import winston from 'winston';

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: './src/error.log',
      level: 'error',
    }),
  ],
});

function showError() {
  throw new Error('Función que muestra Error');
}

try {
  showError();
} catch (error) {
  logger.log('error', error.toString());
}
