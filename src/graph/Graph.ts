import { Node } from './Node';
import { Edge } from './Edge';

export class Graph<N extends Node, E extends Edge> {


  constructor(
    private nodes: N[] = [], 
    private edges: E[] = []
  ) { }

  addNode(node: N) { 
    if (!this.getNodeById(node._id)) {
      this.nodes.push(node);
    }
    return this;
  }

  private getNodeById(_id: number): N {
    return this.nodes.length 
      ? this.nodes.find((n) => n._id === _id) 
      : null;
  }

  addEdge(edge: E) { 
    this.edges.push(edge);
    return this;
  }

  connectNodes(start: N, end: N) {
    this.addNode(start);
    this.addNode(end);
    return this;
  }

  connect(startNode: N, edge: E, endNode?: N) {
    // add to graph
    this.addNode(startNode);
    this.addEdge(edge);
    if (endNode) {
      this.addNode(endNode);
    }

    // connect Nodes and Edges
    startNode.edges.push(edge);
    edge.start = startNode;
    if (endNode) {
      endNode.edges.push(edge);
      edge.end = endNode;
    }
    return this;
  }

  print() {
    return [
      'Nodes',
      '',
      this.nodes.map((n) => n.print({ printEdges: true })).join('\n'),
      '\n\n\n',
      'Edges',
      '',
      this.edges.map((e) => e.print({printNodes: true})).join('\n')
    ].join('\n');
  }
  
}