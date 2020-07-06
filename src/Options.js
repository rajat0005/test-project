import React, { useState } from 'react'

function Options(props) {
  const {
    changeview
  } = props;
  const [state, setState] = useState({ top: false });

  function onchangehandle(key, value) {
    setState({ ...state, [                                                                      ]: value });
    changeview(state);
  }

  return (
    <div className="checks">
      <label htmlFor="top">
        <input type="checkbox" name="top" id="top" value="top" onChange={event => onchangehandle('top', event.target.checked)} />TOP
       </label>
      <label htmlFor="bottom">
        <input type="checkbox" name="bottom" id="bottom" value="bottom" />BOTTOM
       </label>
      <label htmlFor="left">
        <input type="checkbox" name="left" id="left" value="left" />LEFT
       </label>
      <label htmlFor="right">
        <input type="checkbox" name="right" id="right" value="right" />RIGHT
       </label>
      <label htmlFor="fullWidth">
        <input type="checkbox" name="fullWidth" id="fullWidth" value="fullWidth" />FULL-WIDTH
       </label>
      <label htmlFor="fullHeight">
        <input type="checkbox" name="fullHeight" id="fullHeight" value="fullHeight" />FULL-HEIGHT
       </label>

    </div >
  )
}

export default Options
