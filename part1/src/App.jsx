
const App = () => {
  const friends = [ 'Kelvin', 'BookerT' ]
  const otherFriends = [
    {name: 'Jose', age: 30}
  ]
  return (
    <div>
      <h1>Greetings</h1>
      <p>{friends}</p>
      <p>{otherFriends[0].name} {otherFriends[0].age}</p>
    </div>
  )
}
export default App
