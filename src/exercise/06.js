// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  
  const [error, setError] = React.useState(null)

  const userNameInputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    let userNameValue = userNameInputRef.current.value
    onSubmitUsername(userNameValue)
  }
  function handleChange(event) {
    console.log(event.target)
    debugger
    let {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="txt_username">Username:</label>
        <input
          ref={userNameInputRef}
          id="txt_username"
          type="text"
          onChange={handleChange}
        />
        <div style={{color: 'red'}}>{error}</div>
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
