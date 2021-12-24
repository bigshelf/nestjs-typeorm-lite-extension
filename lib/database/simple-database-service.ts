export interface SimpleDatabaseService {
  create(database: string) : Promise<void>;
  drop(database: string) : Promise<void>;
  close(database: string) : Promise<void>;
}