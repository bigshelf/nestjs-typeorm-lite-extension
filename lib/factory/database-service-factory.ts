import { Factory } from "./factory";
import { MysqlDatabaseService, SimpleDatabaseService } from "../database";
import { NotSupportException } from "../exception";
import { ConnectionType } from "../util/connection-type";
import { Injectable } from "@nestjs/common";
import { SimpleDriver } from "../connection/driver";


@Injectable()
export class DatabaseServiceFactory implements Factory<SimpleDatabaseService>{

  create(type: ConnectionType, driver: SimpleDriver): SimpleDatabaseService {
    if(type === "mysql"){
      return new MysqlDatabaseService(driver);
    }

    throw new NotSupportException(type);
  }

}