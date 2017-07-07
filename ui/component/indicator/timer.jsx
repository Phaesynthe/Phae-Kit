import React, { Component } from 'react';

import 'Style/component/indicator/timer.scss';

class DurationClock extends Component {
  constructor(props) {
    super(props);
  }

  /**
   * A 360 degree rotation has been applied to the hand

   transform: rotate(0deg);
   transition: all 1s linear;

   * transition properties will need to be applied directly on the element as inline style.
   * rotation will need to be applied directly to the element as inline style.
   *
   * The hand will rotate exactly once during the entire elapsed time.
   *
   * If the timer is shown after the timer has started, then the hand will be placed at the correct rotation as if it
   * had been running.
   *
   * The real trick is going to be placing the `rotate(0deg);` on the element after it has received initial rotation.
   *
   * A maximum of 900 seconds (15 minutes) feels permissible here. Anything longer, and we want another hand
   **/

  render() {
    return (
      <div className='duration-clock'>
        <svg width='256' height='256'>
          <g>
            <circle style='stroke: black; fill: #f8f8f8;' cx='100' cy='100' r='100' />
          </g>
          <g>
            {
              [...Array(12)].map((e, i) =>
                <line
                  className='tick'
                  key={i}
                  x1='100'
                  y1='10'
                  x2='100'
                  y2='0'
                  style={ `transform: rotate(${360 / 12 * i}deg);` }
                />)
            }
          </g>
          <g>
            <line className='timer-hand' x1='100' y1='100' x2='100' y2='10.0' />
          </g>
        </svg>
      </div>
    );
  }
}

export default DurationClock;
