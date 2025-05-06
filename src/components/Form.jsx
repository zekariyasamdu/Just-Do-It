import { useState } from "react";
import '../style/Form.css'
import { removeDefault, resetTag } from '../utils/utils'


export default function Form({ append }) {


  // Passes an input to our add button 
  let [title, newtask] = useState('')
  let [content, newcontent] = useState('')

  function newTitle(e) {
    newtask(e.target.value)
  }

  function newContent(e) {
    newcontent(e.target.value)
  }



  // Tags that are getting sent out
  let [tag, newtag] = useState(['']);
  const [tagCollection, addNewCollection] = useState([])

  function newTag(e) {
    newtag(e.target.value)
  }

  function addTag() {
    if (tag.trim() !== '') {
      addNewCollection(t => [...t, [new Date().getTime(), tag]])
    } else {
      console.error("tag can't be empty")
    }
  }

  function removeTag(key) {

    let newTags = tagCollection.filter(t => {
      return t[0] !== key
    })
    addNewCollection(newTags)
  }

  return (

    <form className="form" onSubmit={(e) => removeDefault(e)}>
      <h1 className="title">TITLE</h1>
      <input className="title-input" onChange={e => newTitle(e)} placeholder="Title" required />
      <h1 className="content">CONTENT</h1>
      <textarea className="content-input" onChange={e => newContent(e)} placeholder="Content" required></textarea>
      <h1 className="tags">TAGS</h1>
      <div className="sub-class">
        <textarea className="tag-input" onChange={e => newTag(e)} placeholder="Add tag"></textarea>
        <button className="addtag-btn" onClick={() => addTag()}> <i className="fa-solid fa-plus "></i></button>
        {tagCollection.map(t => (
          <div className="each-tag" key={t[0]}>
            #{t[1]}
            {console.log(t[0])}
            <button className="removetag-btn" onClick={() => removeTag(t[0])}><i className="fa-solid fa-xmark"></i></button>
          </div>
        ))}
      </div>
      <AddBtn task={title} content={content} tags={tagCollection} append={append} reset={() => resetTag(addNewCollection)} />
    </form>


  );
}


// Buttons
function AddBtn({ task, append, content, tags, reset }) {

  return (
    <>
      <button type="submit" className="add-btn" onClick={() => append(task, content, tags, reset)} >Add</button>
    </>

  )

}

