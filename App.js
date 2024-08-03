import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...[currentArray]]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Mt To Do({toDos.length})</h1>
      <input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <button>ADD TO DO</button>
      </form>
    </div>
  );
}

export default App;
