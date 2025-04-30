import { useState } from "react";

export default function Adder() {

  return (

    <div className="adder">
      <input className="input" placeholder="Enter a task" />
      <Button kind="A" />
    </div>
  );
}




function Button({ kind }) {

  let [tasks, newtask] = useState(["task1", "task2"])

  function append() {
    newtask(t => [...t, "task3"])

  }

  if (kind === "A") {
    return (
      <>
        <button className="button" onClick={append} >Add</button>
        <Added list={tasks} />
      </>

    )
  }
  else if (kind === "D") {
    return (<button className="button" >Delete</button>)
  } else {
    return (<button className="button"> Done</button>)
  }



}

function Added({ list }) {
  console.log(list)
  return (
    <div>
      {list.map(item => (
        <div > {item} </div>

      ))
      }
    </div>
  )

}