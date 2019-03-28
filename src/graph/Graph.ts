import { Node } from './Node';
import { Edge } from './Edge';

export class Graph {

  constructor(
    private nodes: Node[] = [], 
    private edges: Edge[] = []
  ) { }

  addNode(node: Node) { 
    this.nodes.push(node);
  }

  addEdge(edge: Edge) { 
    this.edges.push(edge);
  }

  connect(startNode: Node, edge: Edge, endNode: Node) {
    // add to graph
    this.addNode(startNode);
    this.addNode(endNode);
    this.addEdge(edge);
    
    // connect Nodes and Edges
    startNode.edges.push(edge);
    endNode.edges.push(edge);
    edge.start = startNode;
    edge.end = endNode;
  }

  print() {
    console.log('Nodes');
    this.nodes.forEach((n) => {
      console.log(n.toString());
      n.edges.forEach((e) => {
        console.log(' ->', e.toString())
      })
    })
    console.log('\n');
    console.log('Edges');
    this.edges.forEach((e) => {
      console.log(
        (e.start) ? `${e.start.toString()} -`: '',
        e.toString(),
        (e.end) ? `- ${e.end.toString()}`: ''
      );
    })
  }
  
}