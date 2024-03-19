import React,{useState, useRef} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
const App = () => {
  const [myNum, setMyNum] = useState(0)
  const inputOne = useRef()
  const inputTwo= useRef()
const getNumBox = () => {
  console.log("Hello")
  console.log(inputOne)
  inputOne.current.style.width = "400px"
}

const getTextBox = () => {
  console.log(inputTwo)
}

  return (
    <>
     <h2>Lerncodingrefs</h2>
     <input 
     ref={inputOne}
     value={myNum}
     type="number"
     style={{width:"100px"}}
     onChange={e => setMyNum(e.target.value)}
     />
      <input 
     ref={inputTwo}
     value={myNum}
     type="text" 
     onChange={e => setMyNum(e.target.value)}
     />
     <h3>Value is : {myNum}</h3>
     <button onClick={() =>getNumBox()}>Rupees</button>
     <button onClick={getTextBox}>Dollars</button>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
