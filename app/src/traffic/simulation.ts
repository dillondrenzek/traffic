import {Intersection, IntersectionState} from './intersection';

export class Stage<T> {
  constructor(
    public delta: Partial<T>,
    public duration: number
  ) { }
}

// Simulation
// - initial state
// - update period
// - get next state
// - get current state
// - get run time

export class Simulation<T> {

  private currentStageIndex: number;
  private sequence: Stage<T>[] = [];
  private sequenceTimers: any[] = [];

  private interval: any | null = null;
  private _runtime: number = 0;
  private _state: T;

  constructor(private initialState: T, private updatePeriod: number) {
    this._state = initialState;
    this.sequence.push({delta: initialState, duration: updatePeriod});
    this.currentStageIndex = 0;
  }

  public get state(): T {
    return this._state;
  }

  public get runtime(): number {
    return this._runtime;
  }

  addStage = (delta: Partial<T>, duration: number) => {
    this.sequence.push({ delta, duration });
    return this;
  }

  run = () => {
    this.interval = setInterval(() => this.tick(), this.updatePeriod);
    return this;
  };

  stop = () => {
    if (this.interval) {
      this.interval = clearInterval(this.interval);
    }
    return this;
  }

  reset = () => {
    this.stop();
    this._state = this.initialState;
  }

  private getNextDelta = () => {
    if (this.currentStageIndex < this.sequence.length) {

    } else {
      return null;
    }
  }

  private tick = () => {
    const delta = this.getNextDelta();
    if (delta) {
      this._state = Object.assign({}, this._state, this.getNextDelta());
      this._runtime += this.updatePeriod;
    } else {
      this.stop();
    }
  }
}