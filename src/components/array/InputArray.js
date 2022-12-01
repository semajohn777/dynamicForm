import React from 'react'
import "./inputArray.css"
const InputArray = (props) => {
  const alertHandeler = () => {
    alert("Sorry You can Update this component!")
  }
  return (
    <div>
      {props.inputDisplay.map((input) => (
        <ul className='array_div' key={input.id}>
          <li className='array_list'>
            I am {input.inpu.inputName} from {input.inpu.inputState}. Am (
            {input.inpu.inputAge} years old.)
          </li>
          <div className='but-div'>
              <button className='update' onClick={alertHandeler}>Update</button>
          <button className='del' onClick={()=>{props.deleteProps(input.id)}}>Delete</button>
          </div>
        </ul>
      ))}
    </div>
  )
}

export default InputArray
