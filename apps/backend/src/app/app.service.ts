import { Injectable } from '@nestjs/common';
import { exec } from 'node:child_process';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  getPing(ip: string) {
    return exec(`ping ${ip}`);
  }
}
