import React, { useState } from 'react'
import Box from './Box'
import Options from './Options'

const App = () => {
  const [state, setstate] = useState({})
  console.log(state)
  return (
    <div>
      <div className="container">
        <Box {...state} />
      </div>
      <div className="options">
        <Options changeview={data => setstate(data)} />
      </div>
    </div>
  )
}
export default App;