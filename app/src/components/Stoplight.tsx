import React, { Component } from 'react';
import * as Traffic from '../traffic';
import './Stoplight.css';

const classnames = require('classnames');


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
    const classNames = classnames('Stoplight',`state-${state}`, className || '');


    return (
      <div className={classNames}>
      </div>
    )
  }
}