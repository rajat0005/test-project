import React from 'react'


export default function Box(props) {
  const {
    top,
    bottom,
    left,
    right
  } = props;
  return (
    <div
      className="frame"
      data-pos-top={top}
      data-pos-bottom={bottom}
    >
      <div className="box" />
    </div>
  )
}
