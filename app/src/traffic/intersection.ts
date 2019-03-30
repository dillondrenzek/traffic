import { LightState } from './light';

export enum Direction {
  North = 'north',
  West = 'west',
  East = 'east',
  South = 'south'
}

export type IntersectionState = { [key in Direction]: LightState };

export type IntersectionStateDelta = Partial<IntersectionState>;

export type IntersectionStage = { state: IntersectionState, duration: number };

export class Intersection {

  private sequence: IntersectionStage[] = [];
  private sequenceTimers: any[] = [];
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
    Object.keys(this.state).forEach((dir: string) => {
      const light = this.state[(dir as Direction)];
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