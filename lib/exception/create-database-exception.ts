export class CreateDatabaseException extends Error {
  constructor(database: string) {
    super(`ERROR: Create ${database} Database`)
  }
}