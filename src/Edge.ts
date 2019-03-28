import { Node } from './Node';

export class Edge<T = any> {
  constructor(public data: T, public start?: Node, public end?: Node) { }
}