import react,{useState} from "react";


function Counter() {
  const[count,setCount]=useState(3)
  return (
    <div className="counter">
      <h2>Counter</h2>
      <h3>The count is - 0</h3>
      <button>Increase</button>
      <button>Decrease</button>
    </div>
  ); 
}

export default Counter;
