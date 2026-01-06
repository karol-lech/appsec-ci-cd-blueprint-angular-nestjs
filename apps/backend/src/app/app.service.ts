import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AppService {
  constructor(private readonly dataSource: DataSource) {}

  getData(id?: string): { message: string } {
    this.dataSource.query(`SELECT id, message FROM messages WHERE id = ${id}`);

    return { message: 'Hello API' };
  }
}
