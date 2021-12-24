export class CloseConnectionException extends Error{
  constructor() {
    super("ERROR: Can not close connection");
  }
}