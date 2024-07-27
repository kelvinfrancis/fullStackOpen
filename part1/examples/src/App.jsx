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
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onSmash, text}) => (
//   <button onClick={onSmash}>
//     {text}
//   </button>
// )

const App = () => {
  const [value, setValue] = useState(10)
  // funcion que devuelve otra funcion (promesas)
  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }
  // Hook useState
  // const [ counter, setCounter ] = useState(0)
  // console.log('rendering with counter value', counter)

  // // controladores de eventos
  // const increaseByOne = () => {
  //   console.log('increasing, value before', counter)
  //   setCounter(counter + 1)
  // }
  // const decreaseByOne = () => {
  //   console.log('decreasing, value before', counter)
  //   setCounter(counter - 1)
  // }
  // const setToZero = () => {
  //   console.log('resetting to zero, value before', counter)
  //   setCounter(0)
  // }
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)
  // const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }
  
  // const handleRightClick = () => {
  //   setAll(allClicks.concat('R'))
  //   setRight(right + 1)
  // }
  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left </button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

export default App