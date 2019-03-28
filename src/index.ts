import { Node, Edge, Graph } from './graph';

(function() {


  let g = new Graph();

  g.connect(
    Node.fromString('A'),
    Edge.fromString('a'),
    Node.fromString('B')
  );

  g.print();

})();

