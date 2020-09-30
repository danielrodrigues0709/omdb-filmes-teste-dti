import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Aguarde..."
      />
    </div>
  )
}

export default Spinner