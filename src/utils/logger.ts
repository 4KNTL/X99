// src/utils/logger.ts
import pino from 'pino';
import pretty from 'pino-pretty';

const stream = pretty({
  colorize: true,
  ignore: 'pid,hostname',
  translateTime: 'SYS:yyyy-mm-dd HH:MM:ss',
});

const logger = pino(stream);

export default logger;