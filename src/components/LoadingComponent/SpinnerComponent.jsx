import React from 'react'

export default function SpinnerComponent(props) {
  return (
    <div style={{"height": `${props.height ? props.height : "transparent"}`}} className='spinner--loading'></div>
  )
}
