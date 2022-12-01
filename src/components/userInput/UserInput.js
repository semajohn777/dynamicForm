import React, { useState } from 'react'
import Card from '../Ul/Card'
import './userInput.css'

const Form = (props) => {
  const [inputName, setInputName] = useState('')
  const [inputState, setInputState] = useState('')
    const [inputAge, setInputAge] = useState('')
    const [valid, setValid] = useState(false)

  const formHandeler = (e) => {
      e.preventDefault()
      const enteredDetails = {
          inputName,
          inputState,
          inputAge,
      }
      if (inputName.trim().length === 0 || inputState.trim().length === 0) {
          setValid(true)
          return;
      }
      if (inputAge < 0 || inputAge.trim().length === 0) {
        setValid(true)
        return;
    }
      //props.transferToApp(inputName, inputAge, inputState)
      props.transferToApp(enteredDetails)
    setInputName("")
    setInputAge("")
    setInputState("")
  }

    const nameOnChangeHandeler = (e) => {
        setInputName(e.target.value)
              setValid(false)

    }

  const stateOnChangeHandeler = (e) => {
      setInputState(e.target.value)
      setValid(false)
  }
  const ageOnChangeHandeler = (e) => {
      setInputAge(e.target.value)
      setValid(false)
  }

  return (
    <Card>
      <div style={{
        textAlign: "center",
        fontWeight: "bolder",
        paddingTop: "1em",
        color: "white",
        width: "90%",
        margin: "auto"
      }}>
        <h1>Discription Form</h1>
      <p style={{margin: "none"}}>This form help to discribe a person. Give it a try!</p>
      </div>
      <form className={`${valid ? "invalid" : "" }`} onSubmit={formHandeler}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={inputName}
            onChange={nameOnChangeHandeler}
          />
        </div>
        <div>
          <label htmlFor="">State Of Origin</label>
          <input
            type="text"
            value={inputState}
            onChange={stateOnChangeHandeler}
          />
        </div>
        <div>
          <label htmlFor="">Age</label>
            <input type="number"
            value={inputAge}
            onChange={ageOnChangeHandeler} />
        </div>
              <button>Submit</button>
              {valid && <p className='error'>Pls fill all input</p> }
      </form>
    </Card>
  )
}

export default Form
