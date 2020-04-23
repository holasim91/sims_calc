import React,{useState} from 'react';

function App() {
  const [value, setValue] = useState('') //연산을 위한 문자열
  const [input, setInput]=useState('')
  const [show, setShow]= useState('')
 

    function click_num(e){
      e.preventDefault()
      let tmp = input
      tmp+=e.target.value
      setInput(tmp)
      setShow(tmp)
      setValue(tmp)
    }
    function clear(){
      setValue('')
      setShow('')
      setInput('')
    }
    function calc(){
      console.log('들어있는 문자열 ',value)
      // eslint-disable-next-line
      setShow(eval(value))
    }

  return (
    <div >
      <h1>{show}</h1>
      <br/>
      <button value= {1} onClick={click_num}>1</button>
      <button value= {2} onClick={click_num}>2</button>
      <button value= {3} onClick={click_num}>3</button>
      <br/>
      <button value= {4} onClick={click_num}>4</button>
      <button value= {5} onClick={click_num}>5</button>
      <button value= {6} onClick={click_num}>6</button>
      <br/>
      <button value= {7} onClick={click_num}>7</button>
      <button value= {8} onClick={click_num}>8</button>
      <button value= {9} onClick={click_num}>9</button>
      <br/>
      <button value= {0} onClick={click_num}>0</button>
      <button value ={'+'} onClick={click_num}>+</button>
      <button value ={'-'} onClick={click_num}>-</button>
      <br/>
      <button value ={'*'} onClick={click_num}>*</button>
      <button value ={'/'} onClick={click_num}>/</button>
      <button onClick={clear}>C</button>
      <button onClick={calc}>=</button>
    </div>
  );
}

export default App;
