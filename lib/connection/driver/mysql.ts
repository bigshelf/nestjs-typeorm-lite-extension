import { MysqlDriver } from "typeorm/driver/mysql/MysqlDriver";
import { Connection, ConnectionOptions, QueryRunner, ReplicationMode } from "typeorm";
import { SimpleDriver } from "./simple-driver";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MysqlSimpleDriver implements SimpleDriver {
  driver: MysqlDriver;
  connection: Connection;


  constructor(options: ConnectionOptions) {
    this.connection = new Connection(options);
    this.driver = new MysqlDriver(this.connection);
  }

  get isConnected(){
    return this.connection.isConnected;
  }

  async disconnect() {
    await this.driver.disconnect();
  }

  async connect() {
    await this.driver.connect();
  }

  createQueryRunner(mode: ReplicationMode): QueryRunner {
    return this.driver.createQueryRunner(mode);
  }

}