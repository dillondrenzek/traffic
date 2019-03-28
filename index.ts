namespace Traffic {

  class Node {
    constructor(public data: any = {}, public edges?: Edge[]) {}
  }

  class Edge {
    constructor(public data: any = {}, public start?: Node, public end?: Node) {}
  }

  class Graph {
    constructor(public nodes: Node[] = [], public edges: Edge[] = []) {}
  }

  (function() {

    let g = new Graph();

    // g.build();

  })();


}

