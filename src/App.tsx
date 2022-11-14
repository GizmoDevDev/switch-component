import './App.css'
import {Switch} from "./switch/Switch";
import {useState} from "react";

function App() {
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);

  console.log({value1, value2, value3});

  return (
    <div className="App">
      <Switch
        value={value1}
        onChange={() => setValue1((prev) => !prev)}
      />
      <Switch
        value={value2}
        onChange={() => setValue2((prev) => !prev)}
      />
      <Switch
        disabled
        value={value3}
        onChange={() => setValue3((prev) => !prev)}
      />
    </div>
  )
}

export default App
