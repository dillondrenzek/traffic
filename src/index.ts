import { Node, Edge, Graph } from './graph';

(function() {


  let g = new Graph();

  let i = Node.fromString('I');

  g.connect(i, Edge.fromString('a'));
  g.connect(i, Edge.fromString('b'));
  g.connect(i, Edge.fromString('c'));
  g.connect(i, Edge.fromString('d'));

  g.print();

})();

