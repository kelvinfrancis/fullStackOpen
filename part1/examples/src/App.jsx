import { useState } from "react"
// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear - age

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

const App = () => {
  // Hook useState
  const [ counter, setCounter ] = useState(0)

  // controladores de eventos
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        Plus
      </button>
      <button onClick={setToZero}>
        Zero
      </button>
    </div>
  )
}

export default App
