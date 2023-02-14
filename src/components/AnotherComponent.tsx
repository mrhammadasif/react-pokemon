import React from 'react'
import {state} from "../store"
const AnotherComponent = () => {
  return (
    <div>
      <p>AnotherComponent</p>
      <button onClick={() => (state.lotion = Date.now() + ' Acme')}>Change Lotion</button>
    </div>
  )
}

export default AnotherComponent