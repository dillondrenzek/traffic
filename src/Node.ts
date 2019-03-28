import { Edge } from './Edge';

export class Node<T = any> {

  private static _id = 0;

  public static getId(): number {
    this._id++;
    return this._id;
  }

  public static fromString(input: string): Node {
    return new Node({ _id: Node.getId() });
  }

  constructor(public data: T, public edges: Edge[] = []) { }

}