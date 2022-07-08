// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = props => (
  <div
    className={`box ${props.size !== undefined ? 'box--' + props.size : ''}`}
    style={{backgroundColor: props.backgroundColor, fontStyle: 'italic'}}
  >
    {`${props.size !== undefined ? props.size : 'sizeless'} ${
      props.backgroundColor !== undefined ? props.backgroundColor : ''
    } box`}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" backgroundColor="lightblue" />
      <Box size="medium" backgroundColor="pink" />
      <Box size="large" backgroundColor="orange" />
      <Box innerText="sizeless box" />
    </div>
  )
}

export default App
