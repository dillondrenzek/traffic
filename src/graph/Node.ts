import { Base } from './Base';
import { Edge } from './Edge';

export class Node<T = any> extends Base<T> {

  public static fromString(input: string): Node<string> {
    return new Node(input);
  }

  constructor(public data: T, public edges: Edge[] = []) { 
    super(data); 
  }

  print({
    printEdges = false,
    graphical = false
  } = {}): string {
    const printSelf = () => `( ${this.toString()} )`;


    return graphical 
    ? [
        printSelf()
      ].join('')
    : [
        printSelf(),
        (printEdges) ? '\n' : '',
        (printEdges) ? this.edges.map((e) => `     - ` + e.print({ graphical: true })).join('\n') : '',
      ].join('');
  }

}