import React, { Component } from 'react';
import './App.css';

import {LightState, Intersection, IntersectionState, Direction, Simulation} from './traffic';

import * as UI from './components';

// interface AppState {
//   runtime: number;
//   intersection: Intersection;
//   intersectionState: IntersectionState;
//   intersectionUpdate: any;
// }

const getIntersection = () => {
  return new Intersection()
    .addStage({
      north: LightState.Green,
      south: LightState.Green
    }, 3000)
    .addStage({
      north: LightState.Yellow,
      south: LightState.Yellow
    }, 1000)
    .addStage({
      north: LightState.Red,
      south: LightState.Red
    }, 1000)
    .addStage({
      east: LightState.Green,
      west: LightState.Green
    }, 3000)
    .addStage({
      east: LightState.Yellow,
      west: LightState.Yellow
    }, 1000)
    .addStage({
      east: LightState.Red,
      west: LightState.Red
    }, 1000);
}

class App extends Component<{}, any> {

  constructor(props: {}) {
    super(props);

    const intersection = getIntersection();
    const simulation = new Simulation(
      intersection.initialState,
      100
    )

    this.state = {
      runtime: 0,
      intersection,
      simulation,
      intersectionState: intersection.state,
      intersectionUpdate: null
    }
  }

  componentDidMount() {

  }

  stopSimulation = () => {
    // Clear interval
    if (this.state.intersectionUpdate) {
      clearInterval(this.state.intersectionUpdate);
    }
  }

  resetIntersection = () => {
    this.stopSimulation();
    
    const intersection = getIntersection();

    // periodically poll simulation to update state
    const updatePeriod = 100;
    const intersectionUpdate = setInterval(() => {
      this.setState({
        runtime: this.state.runtime + updatePeriod,
        intersectionState: this.state.intersection.state
      });
    }, updatePeriod);

    intersection.run();

    this.setState({
      runtime: 0,
      intersection,
      intersectionState: intersection.state,
      intersectionUpdate
    });
  }

  render() {

    const {
      runtime,
      intersection
    } = this.state;

    return (
      <div className="App">

        <div className="Console">
          <div>
            <button onClick={this.stopSimulation}>
              Stop
            </button>
            <button onClick={this.resetIntersection}>
              Restart
            </button>
          </div>
          <code>
            <pre>
              Runtime: {runtime}
            </pre>
          </code>
        </div>

        <div className="Display">
          <UI.Intersection intersection={intersection} />
        </div>

      </div>
    );
  }
}

export default App;
