import { Node } from './Node';
import { Edge } from './Edge';

export class Graph {
  constructor(public nodes: Node[] = [], public edges: Edge[] = []) { }

  addNode(node: Node) { }
  addEdge(edge: Edge) { }
  connect(startNode: Node, edge: Edge, endNode: Node) { }
}