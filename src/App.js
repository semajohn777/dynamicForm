import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'
import Home from './pages/Home'


function App() {
  // const [input, setInput] = useState([])
  // // const [show, setShow] = useState(false)

  // const displayOnApp = (name, age, state) => {
  //   const dataEntered = {
  //     id: Math.random().toString(),
  //     inpu: name,
  //     age,
  //     state,
  //   }
  //   setInput((prevData) => {
  //     return [dataEntered, ...prevData]
  //   })
  //   console.log(dataEntered)
  // }

  // const handleDelete = (id) => {
  //   setInput((prevData) => {
  //     return prevData.filter((input) => input.id !== id)
  //   })
  // }
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route
            path='/'
            element={<Home />}
            exact></Route>
          <Route
            path='*'
            element={<Error />}
            ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
