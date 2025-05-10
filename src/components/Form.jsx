import { useState, useEffect, useRef} from "react";
import '../style/Form.css'
import { removeDefault } from '../utils/utils'
import Popup from './popup'

export default function Form({settask, tagCollection, settagCollection, setMessage}) {


  // Inputs that are passed to the append function 
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function newTitle(e) {
    titleRef.current = e.target.value;
  }

  function newContent(e) {
    contentRef.current = e.target.value;
  }

  
  useEffect(()=>{
    console.log("reRendered")
})
  
  // Tags that are getting sent out
  const tagRef = useRef(null);
  
  function newTag(e) {
    tagRef.current = e.target.value;
  }

  // 
  function addTag() {
    if (tagRef.current.trim() !== '') {
      settagCollection(t => [...t, [new Date().getTime(), tagRef.current]])
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
          onClick={() => append(titleRef.current, contentRef.current, tagCollection)} >Add</button>
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
