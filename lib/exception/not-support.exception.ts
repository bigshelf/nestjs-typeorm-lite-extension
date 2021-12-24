import { ConnectionType } from "../util/connection-type";



export class NotSupportException extends Error {
  constructor(type: ConnectionType) {
    super("ERROR : Not Support " + type);
  }
}