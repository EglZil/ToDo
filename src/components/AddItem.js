import { useRef } from "react";

const AddItem = (props) => {
  const userInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addToDo(userInput.current.value);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input type="text" ref={userInput} placeholder="Enter new ToDo"></input>
      <input type="submit" value="Add"></input>
    </form>
  );
};

export default AddItem;
