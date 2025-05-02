import { useState } from "react";


// main input
export default function Adder() {

  
  let [task, newtask] = useState()

  function passNewTask(e){
    newtask(e.target.value)
  }

  return (

    <div className="adder">
      <input className="input" onChange={e => passNewTask(e)} placeholder="Enter a task" />
      <AddBtn task={task}/>
    </div>
  );
}

// renderer
function Added({ list }) {
  console.log(list)
  return (
    <div>
      {list.map((item)=> (
        <div key={item.id}> 
        {item.task  } 
        <DeleteBtn />  
        <DoneBtn />
        </div> 
      ))
      }
    </div>
  )

}

// Buttons
function AddBtn({task}){
  let index = 0; 

  let [tasks, newtask] = useState([])
  function append() {
    newtask(t => [...t, {id: index++, task}])

  }

  return (
    <>
      <button className="button" onClick={append} >Add</button>
      <Added list={tasks} />
    </>

  )

}

function DeleteBtn(){

  return(
    <button>Delete</button>
  )
}


function DoneBtn(){
  return(
    <button>Done</button>
  )
}


