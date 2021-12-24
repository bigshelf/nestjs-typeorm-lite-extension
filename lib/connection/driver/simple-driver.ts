import {Driver} from "typeorm/driver/Driver"
import { MysqlDriver } from "typeorm/driver/mysql/MysqlDriver";
import { Connection } from "typeorm";

export interface SimpleDriver extends Pick<Driver, 'connect' | 'disconnect' | 'createQueryRunner'> {
  driver: MysqlDriver;
  connection: Connection;
  get isConnected(): boolean;
}