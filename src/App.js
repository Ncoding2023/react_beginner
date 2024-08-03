import { useEffect, useState } from "react";
function Hello() {
  // function closeFn() {
  //   console.log("close :(");
  // }
  // function openFn() {
  //   console.log("open :)");
  //   return closeFn;
  // }
  useEffect(() => {
    console.log("open :)");
    return () => console.log("close :(");
  },[]);
  useEffect(function (){
    console.log("open :)");
    return function() {
      console.log("close :(");
    }
  },[]);
  return  <h1>Hello</h1>
}

function App() {
  const [showing,setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return  (
    <div>
      {showing ? <Hello/> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
