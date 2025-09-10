import { useState } from 'react'

export function InputField(){
  const [inputs,setInputs] = useState("");
  const [toDoList,setToDoList] = useState([]);

  function inputSet(e){
    setInputs(e.target.value)
  }

    function listItem(){

       if (inputs.trim() === "") return; 
      let newItem = {
        id: crypto.randomUUID(),
        text: inputs,
      }
      setToDoList([...toDoList,newItem])

      setInputs("");
    }
    function deleteButton(id){
    setToDoList( toDoList.filter((del) => 
        del.id !== id
     ))
    }

  return(
    <div  className="container">
     <input className='todo-main' placeholder='To-Do-List' onChange={inputSet} value={inputs}/>
     <button className='send-btn' onClick={listItem}>Send</button>

     {toDoList.map((lists) => {
      return(
        <div key={lists.id} className="todo-item" >
        
        <input type='checkbox' />
          <span className='display-message'>{lists.text}</span>
         <button onClick={() => deleteButton(lists.id)}>Delete</button>

        </div>
      );
     })}
    </div>
  );
}
