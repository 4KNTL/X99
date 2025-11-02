// src/commands/ping.command.ts
import type { WASocket } from 'baileys';
import type { Command, ExtendedWAMessage } from '../types/index.d.ts';
import logger from '../utils/logger.ts';

const testCommand: Command = {
  name: 'test',
  aliases: ['test', '99'],
  description: '.',
  
  execute: async (sock: WASocket, message: ExtendedWAMessage, args: string[]) => {
    try {
        console.log(message);
    } catch (error) {
      logger.error(error, 'Error in test command:');
      await sock.sendMessage(
        message.key.remoteJid!,
        { text: 'An error occurred while executing the test command.' }
      );
    }
  },
};

export default testCommand;