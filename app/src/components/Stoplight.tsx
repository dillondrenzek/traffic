import React, { Component } from 'react';
import * as Traffic from '../traffic';
import './Stoplight.css';


export interface StoplightProps {
  className?: string;
  state: Traffic.LightState;
}

export class Stoplight extends Component<StoplightProps, {}> {
  render() {
    const {
      className,
      state
    } = this.props;
    const classNames = [
      'Stoplight',
      `state-${state}`,
      className || ''
    ].join(' ');

    return (
      <div className={classNames}>
      </div>
    )
  }
}