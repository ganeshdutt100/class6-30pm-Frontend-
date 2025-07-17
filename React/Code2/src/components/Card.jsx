import React from 'react'

const Card = (props) => {
  return (
  <div>
  <h2>name :{props.name}  </h2>
  <p>{props.details}</p>
</div>

  )
}

export default Card

