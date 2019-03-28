import { Base } from './Base';
import { Edge } from './Edge';

export class Node<T = any> extends Base<T> {

  public static fromString(input: string): Node<string> {
    return new Node(input);
  }

  constructor(public data: T, public edges: Edge[] = []) { 
    super(data); 
  }

}