import { useState } from "react";
import '../style/Form.css'
// Input Form
export default function Form({ append }) {

  // Passes an input to our add button 
  let [title, newtask] = useState()
  let [content , newcontent] = useState()
  let [tag, newtag] = useState();

  function newTitle(e) {
    newtask(e.target.value)
  }

  function newContent(e) {
    newcontent(e.target.value)
  }

  function newTag(e) {
    newtag(e.target.value)
  }

  // Tags that are getting sent out
  const [tagCollection, addNewCollection] = useState([])

  function addTag(){
    addNewCollection(t => [...t, [Date.now(), tag]])
    console.log(tagCollection)
  }

  function resetTag(){
    addNewCollection([])
  }




  return (

    <div className="form">
      <h1 className="title">TITLE</h1>
      <input className="title-input" onChange={e => newTitle(e)} placeholder="Title" />
      <h1 className="content">CONTENT</h1>
      <textarea className="content-input" onChange={e => newContent(e)} placeholder="Content"></textarea>
      <h1 className="tags">TAGS</h1>
      <div className="sub-class">
        <textarea className="tag-input" onChange={e => newTag(e)} placeholder="Add tag"></textarea>
        <button className="addtag-btn" onClick={() => addTag()}> <i className="fa-solid fa-plus"></i></button>
      </div>
      <AddBtn task={title} content={content} tags={tagCollection} append={append} reset={resetTag} />
    </div>


  );
}


// Buttons
function AddBtn({ task, append, content, tags, reset }) {
  return (
    <>
      <button className="add-btn" onClick={() => append(task, content, tags, reset) } >Add</button>
    </>

  )

}

