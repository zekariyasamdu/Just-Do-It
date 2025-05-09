import { useState } from "react";
import '../style/Form.css'
import { removeDefault } from '../utils/utils'
import Popup from './popup'

export default function Form({settask, tagCollection, settagCollection, removeTag , setMessage}) {

  
  // Diplays a popup when ever a a from is added 




  // Inputs that are passed to the append function 
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
  
  function newTag(e) {
    newtag(e.target.value)
  }

  // 
  function addTag() {
    if (tag.trim() !== '') {
      settagCollection(t => [...t, [new Date().getTime(), tag]])
    } else {
      console.error("tag can't be empty")
    }
  }

  function removeTag(key) {
    
    let newTags = tagCollection.filter(t => {
        return t[0] !== key
    })
    settagCollection(newTags)
}



  

  // appends a task to the main task container 
  function append(title, content, tags) {
    if (title.trim() !== '' && content.trim() !== '') {
      settask(t => [...t, { id: new Date(), title, content, tags, ReadOnly: true, edited: false }])
      setMessage(true)
      setTimeout(() => { setMessage(false) }, 4000)
  
      settagCollection([])// resets the tag array eveytime a need note is added
    } else {
      console.error("please fill in an input")
  
    }
  }

  return (

    <>
     

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
            <Removetag key={t[0]} 
            text={t[1]} 
            removeTag={removeTag} 
            id={t[0]}
            />
          ))}
        </div>
        <button type="submit"
          className="add-btn"
          onClick={() => append(title, content, tagCollection)} >Add</button>
      </form>
    </>



  );
}



function Removetag({ text, removeTag, id, currentcollection}) {
    

  return (
      <div className="each-tag">
          #{text}
          <button className="removetag-btn" onClick={() => removeTag(id, currentcollection)}><i className="fa-solid fa-xmark"></i></button>
      </div>
  )
}
