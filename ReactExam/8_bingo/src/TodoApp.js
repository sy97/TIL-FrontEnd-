import React, { useState } from "react";

const TodoApp = () => {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");

const handleAddTodo = () => {
    if(input === null){
        return;
    }

    setTodos([...todos,input]);
    setInput("");
};

const handleDeleteTodo = (index) => {
    let filtertodos = todos.filter((i)=> i !== index);
    setTodos([...filtertodos]);

};

return (
<div>
<h1>Todo List</h1>
<input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    />
    <button onClick={handleAddTodo}>추가</button>
    {todos.length === 0 ? (
    <p>할 일이 없습니다</p>
    ) : (
    <ul>
        {todos.map((todo, index) => (
        <li key={index}>
            {todo}{" "}
            <button onClick={() => handleDeleteTodo(index)}>삭제</button>
        </li>
        ))}
    </ul>
    )}
</div>
);
};

export default TodoApp;