import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const[todos, setTodos] = useState([]);
  const[headingInput, setHeadingInput] = useState([]);
  const[listInputs, setListInputs] = useState([]);
  
  const handleAddTodo = () => {
    if (headingInput.trim() !=='') {
      setTodos([...todos, {heading: headingInput, lists:[]}]);
      setHeadingInput('');
    }
  }
  const handleAddList = (index)=>{
    if (listInputs[index] && listInputs[index].trim() !==''){
      const newTodos = [...todos];
      newTodos[index].lists.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({...listInputs, [index]:''});
    }
  }


  return (
    <>
      <div className="todo-container">
        <h1 className="title">My Todo List</h1>


        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput}
            onChange={(e) => {setHeadingInput(e.target.value);}} //Add onChange event handler to update headingInput state
            
          />
          <button className="add-list-button" onClick={handleAddTodo}>Add Heading</button>
        </div>
      </div>
      {/*display Todo list*/}
      <div className="todo_main">
        {todos.map((todo, indix) =>(
          <div key={indix} className='todo-card'>
            <div className='heading_todo'>
              <h3>{todo.heading}</h3> {/*Display the heading here*/}
              <button className='delet-button-heading' onClick={() => heandleDeleteTodo(indix)}>Delete Heading</button>
            </div>
            <div className='add_list'>
              <input
                type='text'
                className='list-input'
                placeholder='Add List'
                value={listInputs[indix] || ''}
                onChange={(e) => handleListInputChange(index, e.target.value)}
              />
              <button className='add-list-buttom' onClick={()=> handleAddList(index)}>Add List</button>
              <ul>
                [todo.lists.maps((list, listIndex)=> (
                  <li key={listIndex} className='todo_inside_list'>
                    <p>{lsit}</p>
                  </li>
                ))]
              </ul>
            </div>
          </div>
        ))}
        
      </div>
    </>
  );
};

export default TodoList;
