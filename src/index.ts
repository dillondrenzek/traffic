class Stage {
  constructor( 
    public light: LightState,
    public duration: number
  ){}
}

enum LightState {
  Red = 'red',
  Yellow = 'yellow',
  Green = 'green'
}

// class Stoplight {

//   constructor(private stages: Stage[] = []) {}

//   // Light Config Sequence
//   private sequenceTimers = [];

//   // State
//   private _state: LightState = null;
//   private setState = (state: LightState) => {
//     return () => {
//       console.log('change state to', state);
//       this._state = state;
//     }
//   }

//   get state(): LightState {
//     return this._state;
//   }

//   set state(state: LightState) {
//     this._state = state;
//     console.log('change state to', state);
//   }
// }

enum Direction {
  North = 'north',
  West = 'west',
  East = 'east',
  South = 'south'
}

type IntersectionState = { [key in Direction]: LightState };

type IntersectionStateDelta = Partial<IntersectionState>;

type IntersectionStage = { state: IntersectionState, duration: number };

class Intersection {

  private sequence: IntersectionStage[] = [];
  private sequenceTimers: number[] = [];
  private time = 0;
  private state: IntersectionState;

  constructor(public initialState: IntersectionState = {
    north: LightState.Red,
    south: LightState.Red,
    west: LightState.Red,
    east: LightState.Red,
  }) {
    this.state = initialState;
  }

  print = () => {
    Object.keys(this.state).forEach((dir: Direction) => {
      const light = this.state[dir];
      console.log(dir, light);
    });
    console.log('\n');
  }

  addStage = (fn: () => IntersectionStateDelta, duration: number) => {
    this.sequence.push({ state: Object.assign({}, this.state, fn()), duration });
    return this;
  }

  private scheduleStage = (stage: IntersectionStage) => {
    const timer = setTimeout(() => this.state = stage.state, this.time);
    this.sequenceTimers.push(timer);

    this.time += stage.duration;
  }

  run = () => {
    this.sequence.forEach(this.scheduleStage);
    return this;
  }

  stop = () => {
    this.sequenceTimers.forEach((timer) => clearTimeout(timer));
    return this;
  }

}


const intersection = new Intersection();

intersection
  .addStage(() => ({
    north: LightState.Green,
    south: LightState.Green
  }), 3000)
  .addStage(() => ({
    north: LightState.Yellow,
    south: LightState.Yellow
  }), 1000)
  .addStage(() => ({
    north: LightState.Red,
    south: LightState.Red
  }), 1000)
  .addStage(() => ({
    west: LightState.Green,
    east: LightState.Green
  }), 3000)
  .addStage(() => ({
    north: LightState.Yellow,
    south: LightState.Yellow
  }), 1000)
  .run();

setInterval(() => {
  intersection.print();
}, 1000);









// import { Node, Edge, Graph } from './graph';
// (function() {
//   console.log('Edge: []');
//   console.log('Node: ()');
//   console.log('\n\n')

//   let g = new Graph();
//   let i = Node.fromString('I');
//   let j = Node.fromString('J');

//   g.connect(i, Edge.fromString('a'), j)
//     .connect(i, Edge.fromString('b'))
//     .connect(i, Edge.fromString('c'))
//     .connect(i, Edge.fromString('d'));

//   console.log('Graph');
//   console.log('-----\n');
//   console.log(g.print());

// })();

