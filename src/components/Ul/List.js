import React from 'react'
import "./Ul.css"

const List = (props) => {
    const classname = "listItem" + props.className
  return (
      <div className={classname}>
          {props.children}
    </div>
  )
}

export default List