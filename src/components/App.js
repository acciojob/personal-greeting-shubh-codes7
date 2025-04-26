
import React from "react";
import './../styles/App.css';

const App = () => {
  const [greet, setGreet] = React.useState('')

  function handleGreet(e){
    console.log(e.target.value)
    setGreet(e.target.value)
  }

  return (
    <div>
        <label>Enter your name:</label>
        <input type="text" onChange={(e)=>handleGreet(e)}/>
        {greet.trim() !== '' && <p>Hello, {greet}!</p>}
    </div>
  )
}

export default App
