import "./App.css";
import { useState } from "react";
import { v4 } from "uuid";
import AddItem from "./components/AddItem";
import ListItem from "./components/ListItem";

function App() {
  const [toDo, setToDo] = useState([
    { id: v4(), name: "Išplauti indus", checked: false },
    { id: v4(), name: "Išvesti šunį", checked: false },
  ]);

  const handleAddToDo = (value) => {
    setToDo((prevToDos) => [
      ...prevToDos,
      {
        id: v4(),
        name: value,
        checked: false,
      },
    ]);
  };

  const handleChecked = (id) => {
    const newList = toDo.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : { ...item };
    });
    setToDo(newList);

  };

  return (
    <div className="app">
      <header>To Do List</header>
      <ul>
        {toDo.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            name={item.name}
            checked={item.checked}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
      <AddItem addToDo={handleAddToDo} />
    </div>
  );
}

export default App;
