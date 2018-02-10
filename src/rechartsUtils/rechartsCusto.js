// @flow
import React from 'react';

type TimelineProps = {
  x: string,
  y: string,
  payload: {value: string},
}

export const TimelineXAxisTick = (props: TimelineProps) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-35)"
        fontSize="0.80em"
      >
        {payload.value}
      </text>
    </g>
  );
};


export const TimelineYAxisTick = (props: TimelineProps) => {
  const { x, y, payload } = props;
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={5}
        textAnchor="end"
        fill="#666"
        fontSize="0.80em"
      >
        {payload.value}
      </text>
    </g>
  );
};
