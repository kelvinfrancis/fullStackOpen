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
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
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
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
  }
  
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  
  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  )
}

export default App
