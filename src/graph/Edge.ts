import { Base } from './Base';
import { Node } from './Node';

export class Edge<T = any> extends Base<T> {

  public static fromString(input: string): Edge<string> {
    return new Edge(input);
  }

  constructor(public data: T, public start?: Node, public end?: Node) {  
    super(data); 
  }

}