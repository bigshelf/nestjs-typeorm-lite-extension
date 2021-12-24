export interface Factory<T> {
  create(...arg: any[]): T;
}