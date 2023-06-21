import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';


function TodoList() {
    const [todos, setTodos] = useState([]);
    

    //addTodo 
    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
    

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    }; 
    
    //updateTodo
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    //removeTodo
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
    
        setTodos(removedArr);
    };
    
    //completeTodo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    

    return (
        <div>
            <h1>Hey! What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
              todos={todos} 
              completeTodo={completeTodo} 
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
        </div>
    );
}

export default TodoList;
