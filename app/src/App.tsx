import React, { Component } from 'react';
import './App.css';

import {Stoplight, LightState, Intersection, IntersectionState, Direction} from './traffic';

interface AppState {
  intersection: IntersectionState;
  intersectionUpdate: any;
}

class App extends Component<{}, AppState> {

  public intersection = new Intersection()
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

  constructor(props: {}) {
    super(props);

    this.state = {
      intersection: this.intersection.state,
      intersectionUpdate: null
    }
  }

  componentDidMount() {
    // run the intersection simulation
    this.intersection.run();

    // periodically poll simulation to update state
    const intersectionUpdate = setInterval(() => {
      const intersection = this.intersection.state;
      this.setState({
        intersection
      });
    }, 100);

    // update state with intersection update
    this.setState({
      intersectionUpdate
    });
  }

  render() {

    const {
      intersection
    } = this.state;

    return (
      <div className="App">
        <Stoplight state={intersection.north} />
        <Stoplight state={intersection.south} />
        <Stoplight state={intersection.west} />
        <Stoplight state={intersection.east} />
      </div>
    );
  }
}

export default App;
