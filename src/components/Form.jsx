import { useState } from "react";

// Input Form
export default function Form({ append }) {

  // Passes an input to our add button 
  let [task, newtask] = useState()
  function passNewTask(e) {
    newtask(e.target.value)
  }

  return (

    <div className="form">
      <h1 className="title">title</h1>
      <input className="title-input" onChange={e => passNewTask(e)} placeholder="Title" />
      <h1 className="content">Content</h1>
      <textarea className="content-input" placeholder="Content"></textarea>
      <h1 className="tags">TAGS</h1>
      <div className="sub-class">
        <textarea className="tag-input" placeholder="Add tag"></textarea>
        <button> add</button>
      </div>
      <AddBtn task={task} append={append} />
    </div>


  );
}


// Buttons
function AddBtn({ task, append }) {
  return (
    <>
      <button className="button" onClick={() => append(task)} >Add</button>
    </>

  )

}

