import React, { useState, useEffect } from 'react';
import './App.css';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedTodos = JSON.parse(localStorage.getItem('todos'));
      if (storedTodos) {
        setTodos(storedTodos);
        console.log("Loaded todos from localStorage: ", storedTodos);
      }
    } catch (error) {
      console.error("Error loading todos from localStorage: ", error);
    } finally {
      setIsLoaded(true); // Set the flag after loading
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      console.log("Saving todos to localStorage: ", todos);
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos, isLoaded]);

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const renderTodos = () => {
    return todos.length ? (
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="no-todos">No tasks added yet. Begin by creating a new task!</p>
    );
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <textarea
        placeholder="Add a new task"
        value={newTodo}
        onChange={handleInputChange}
        rows={3}
      />
      <button onClick={addTodo}>Add</button>

      {renderTodos()}
    </div>
  );
}

export default Todo;
