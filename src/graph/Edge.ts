import { Base } from './Base';
import { Node } from './Node';

export class Edge<T = any> extends Base<T> {

  public static fromString(input: string): Edge<string> {
    return new Edge(input);
  }

  constructor(public data: T, public start?: Node, public end?: Node) {  
    super(data); 
  }


  print({
    printNodes = false,
    graphical = false
  } = {}): string {
    const printSelf = () => `[ ${this.toString()} ]`;
    const printStartNode = () => { return `${this.start ? this.start.print({ graphical: true }) + ' -> ' : ''}` };
    const printEndNode = () => { return `${this.end ? ' -> ' + this.end.print({ graphical: true }) : ''}` };

    return [
      (printNodes) ? printStartNode() : '',
      printSelf(),
      (printNodes) ? printEndNode() : '',
    ].join('');
  }

}