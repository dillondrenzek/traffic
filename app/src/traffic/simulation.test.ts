import { Simulation } from './simulation';

interface TestState {
  a: string;
  b: number;
}

const getTestState = () => {
  return {
    a: 'test',
    b: 5
  };
}

describe('initializes', () => {
  let simulation: Simulation<TestState>;

  it('adds initial state', () => {
    const initialState = getTestState();
    simulation = new Simulation(initialState, 5);
    expect(simulation.state).toEqual(initialState);
  });

  it('starts at 0 runtime', () => {
    const initialState = getTestState();
    const updatePeriod = 10;
    simulation = new Simulation(initialState, updatePeriod);
    expect(simulation.runtime).toEqual(0);
  });

});

describe('adds stages', () => {
  let simulation: Simulation<TestState>;
  let initialState: TestState;
  let updatePeriod: number = 100;
  beforeEach(() => {
    initialState = getTestState();
    simulation = new Simulation(initialState, updatePeriod);
  });

  it('adds 1 stage', () => {
    const delta = {b: 10};
    const subject = simulation.addStage(delta, 1000);
    const deltas = subject.stages.map(stage => stage.delta);
    expect(deltas).toContain(delta);
  });
});