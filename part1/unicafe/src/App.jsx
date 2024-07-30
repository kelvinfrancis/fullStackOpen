import { useState } from "react";

const Button = (props) => {
  return (
    <>
    <button onClick={props.setAction}>{props.text}</button>
    </>
  )
}
const Statistics = (props) => {
  console.log(props.average)
  return (
    <>
      <h1>statistics</h1>
      <p>
        good: {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {props.sumTotal} <br />
        average {props.average} <br />
        positive {props.positive}%
      </p>
    </>
  );
};

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const setToGood = () => setGood(good + 1);

  const [neutral, setNeutral] = useState(0);
  const setToNeutral = () => setNeutral(neutral + 1);

  const [bad, setBad] = useState(0);
  const setToBad = () => setBad(bad + 1);

  const sumTotal = good + neutral + bad;
  const average = (good - bad) / sumTotal;
  const positiveComments = (good / sumTotal) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button setAction={setToGood} text='good'/>
      <Button setAction={setToNeutral} text='neutral'/>
      <Button setAction={setToBad} text='bad'/>

      <Statistics good={good} neutral={neutral} bad={bad} sumTotal={sumTotal} average={average} positive={positiveComments}/>
    </div>
  );
};

export default App;
