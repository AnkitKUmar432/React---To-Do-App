import {useState } from 'react'
// import './App.css'

function App() {
  const [taskText, setTaskText] = useState("")
  const [todos, setTodos] = useState([])
  let handleTask = () => {

    let text = taskText.trim();
    if (text.length === 0) return;
    let newObjectTask = { id: Date.now(), text };

    const updated = [...todos, newObjectTask].sort((a, b) => a.text.localeCompare(b.text));
    setTodos(updated);
    setTaskText('');

  }
  const deleteTask = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));

  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleTask();
    };
  }
  return (
    <div style={{}}>
      <h1>React - To Do App</h1>
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder='Write a task' onKeyDown={handleKeyDown} />
      <button onClick={handleTask}>Add</button>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}><span>{todos.text}</span>
            <button onClick={() => deleteTask(todos.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
// * Add Button to add new tasks on click.
// * The 
//  field should be cleared upon successful addition.
// * Remove tasks from the Todo List upon clicking the "Delete" button.
// * All To do List Should be listed in ascending order.

