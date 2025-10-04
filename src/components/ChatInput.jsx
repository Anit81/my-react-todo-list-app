import { useState } from "react";

export function InputField() {
  const [inputs, setInputs] = useState("");
  const [toDoList, setToDoList] = useState([]);

  function inputSet(e) {
    setInputs(e.target.value);
  }

  function listItem() {
    if (inputs.trim() === "") return;
    let newItem = {
      id: crypto.randomUUID(),
      text: inputs,
      completed: false, 
    };
    setToDoList([...toDoList, newItem]);
    setInputs("");
  }

  function deleteButton(id) {
    setToDoList(toDoList.filter((del) => del.id !== id));
  }

  function toggleCompleted(id) {
    setToDoList(
      toDoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="container">
      <input
        className="todo-main"
        placeholder="To-Do-List"
        onChange={inputSet}
        value={inputs}
      />
      <button className="send-btn" onClick={listItem}>
        Send
      </button>

      {toDoList.map((lists) => {
        return (
          <div key={lists.id} className="todo-item">
            <input
              type="checkbox"
              checked={lists.completed}
              onChange={() => toggleCompleted(lists.id)}
            />
            <span
              style={{
                textDecoration: lists.completed ? "line-through" : "none",
                color: lists.completed ? "gray" : "black",
              }}
            >
              {lists.text}
            </span>
            {lists.completed && <span> ✅ task completed</span>}
            <button onClick={() => deleteButton(lists.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

