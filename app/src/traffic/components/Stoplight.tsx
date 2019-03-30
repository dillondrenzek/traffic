import React, { Component } from 'react';
import { LightState } from '../light';
import './Stoplight.css';


export interface StoplightProps {
  state: LightState;
}

export class Stoplight extends Component<StoplightProps, {}> {
  render() {
    const {
      state
    } = this.props;
    const classNames = [
      'Stoplight',
      `state-${state}`
    ].join(' ');

    return (
      <div className={classNames}>
      </div>
    )
  }
}