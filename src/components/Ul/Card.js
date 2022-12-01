import React from 'react'
import "./Ul.css"

const Card = (props) => {
    const classes = "back " + props.className
  return (
      <div className={classes}>
          {props.children}
    </div>
  )
}

export default Card