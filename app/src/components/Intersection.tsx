import React, { Component } from 'react';
import * as Traffic from '../traffic';
import { Stoplight } from './Stoplight';
import './Intersection.css';


export interface IntersectionProps {
  intersection: Traffic.Intersection;
}

export class Intersection extends Component<IntersectionProps, {}> {
  render() {
    const {
      intersection
    } = this.props;
    const classNames = [
      'Intersection',
    ].join(' ');

    return (
      <div className={classNames}>
        <Stoplight className='north' state={intersection.state.north} />
        <Stoplight className='west' state={intersection.state.west} />
        <Stoplight className='east' state={intersection.state.east} />
        <Stoplight className='south' state={intersection.state.south} />
      </div>
    )
  }
}