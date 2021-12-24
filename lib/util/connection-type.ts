import { ConnectionOptions } from "typeorm";

export type ConnectionType = ConnectionOptions[keyof Pick<ConnectionOptions, 'type'>]