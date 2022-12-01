import React from 'react'
import { useState } from 'react'
import "../components/userInput/userInput.css"
import Form from '../components/userInput/UserInput'
import InputArray from '../components/array/InputArray'



const Home = () => {
    const [input, setInput] = useState([])
  // const [show, setShow] = useState(false)

   const displayOnApp = (name, age, state) => {
    const dataEntered = {
      id: Math.random().toString(),
      inpu: name,
      age,
      state,
    }
    setInput((prevData) => {
      return [dataEntered, ...prevData]
    })
    console.log(dataEntered)
  }

  const handleDelete = (id) => {
    setInput((prevData) => {
      return prevData.filter((input) => input.id !== id)
    })
  }
  return (
    <div>  
      
        <Form transferToApp={displayOnApp} />
        {input.length === 0 && <p style={{textAlign: "center"}}>No Item yet! consider filling the form</p>}
        <InputArray inputDisplay={input} deleteProps={handleDelete} />
    </div>
  )
}

export default Home