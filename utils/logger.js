// utils/logger.js
const { createLogger, format, transports } = require('winston');
const path = require('path');

// Path where logs will be saved
const logFilePath = path.join(__dirname, '../reports/logs/automation.log');

// Create logger instance
const logger = createLogger({
  level: 'info', // default level: info, error, warn, debug
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    // Show logs in console
    new transports.Console(),
    // Save logs to a file
    new transports.File({ filename: logFilePath }),
  ],
});

module.exports = logger;
