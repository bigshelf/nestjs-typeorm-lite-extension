export class DropDatabaseException extends Error {
  constructor(database: string) {
    super(`ERROR: Drop ${database} Database`)
  }
}