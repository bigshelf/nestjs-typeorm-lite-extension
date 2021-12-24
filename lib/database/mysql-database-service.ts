import { SimpleDatabaseService } from "./simple-database-service";
import { Injectable } from "@nestjs/common";
import { MysqlSimpleDriver } from "../connection/driver/mysql";
import { CreateDatabaseException } from "../exception/create-database-exception";
import { DropDatabaseException } from "../exception/drop-database-exception";
import { CloseConnectionException } from "../exception/close-connection-exception";

@Injectable()
export class MysqlDatabaseService implements SimpleDatabaseService{

  constructor(private readonly driver: MysqlSimpleDriver) {
  }

  async create(database: string): Promise<void> {
    try {
      const queryRunner = this.driver.createQueryRunner("master");
      await queryRunner.connect();
      await queryRunner.createDatabase(database, true);
    } catch (error) {
      throw new CreateDatabaseException(database);
    }

    if(this.driver.isConnected){
      await this.close.call(this);
    }
  }

  async drop(database: string): Promise<void> {
    try {
      const queryRunner = this.driver.createQueryRunner("master");
      await queryRunner.connect();
      await queryRunner.dropDatabase(database, true);
    } catch (error) {
      throw new DropDatabaseException(database);
    }

    if(this.driver.isConnected) {
      await this.close.call(this);
    }
  }

  async close(){
    try {
      await this.driver.disconnect();
    } catch (error) {
      throw new CloseConnectionException();
    }
  }

};