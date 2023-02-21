import React from 'react'

// IMPORT CSS
import "../App.css"

function Square({val, chooseSquare}) {

  return (
    <div onClick={chooseSquare} className="square">
        {val}
    </div>
  )
}

export default Square