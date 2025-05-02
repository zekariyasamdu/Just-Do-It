import { useState } from "react";

let index = 0;

// main input
export default function Adder() {


  let [task, newtask] = useState()

  function passNewTask(e) {
    newtask(e.target.value)
  }

  return (

    <div className="adder">
      <input className="input" onChange={e => passNewTask(e)} placeholder="Enter a task" />
      <AddBtn task={task} />
    </div>
  );
}

// renderer
function Added({ tasks, del }) {
  console.log(tasks)
    

  return (
    <div>
      {
        tasks.map((item) => (
          <div key={item.id}>
            {item.task}
            <button onClick={() =>del(item.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )

}

// Buttons
function AddBtn({ task }) {
  let [tasks, newtask] = useState([])

  function append() {
    newtask(t => [...t, { id: index++, task }])

  }

  function del(id){
    newtask(
      tasks.filter(t => (t.id !== id))
    )}

  return (
    <>
      <button className="button" onClick={append} >Add</button>
      <Added tasks={tasks} del={del} />
    </>

  )

}
