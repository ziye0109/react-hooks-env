import React from 'react';

const List = ({ width = '24', height = '24', color = 'gray' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={color}
  >
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default List;
