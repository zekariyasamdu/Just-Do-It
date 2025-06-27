import { useRef, useContext } from "react";
// contexts
import { dataBaseUpdatedContext } from "../context/DataBaseUpdatedContext.jsx"
import { messageContext } from "../context/MessageContext.jsx";
// firebase
import { addDoc } from "firebase/firestore";
// utils
import { getCurrenCollection, removeDefault } from '../utils/utils'
// style
import '../style/Form.css'


export default function Form({ tagCollection, settagCollection }) {
  // contexts
  const [change, setChange] = useContext(dataBaseUpdatedContext)
  const [message, setMessage] = useContext(messageContext)

  // Inputs that are passed to the append function 
  const titleRef = useRef();
  const contentRef = useRef();

  function newTitle(e) {
    titleRef.current = e.target.value;
  }

  function newContent(e) {
    contentRef.current = e.target.value;
  }

  // Tags that are getting sent out
  const tagRef = useRef();

  function newTag(e) {
    tagRef.current = e.target.value;
  }

  // 
  function addTag() {
    if (tagRef.current.trim() !== '') {
      settagCollection(t => [...t, tagRef.current])
    } else {
      console.error("tag can't be empty")
    }
  }

  function removeTag(key) {

    let newTags = tagCollection.filter((t, index) => {
      return index !== key
    })
    settagCollection(newTags)
  }


  // appends a task to the main task container 
  const append = async (title, content, tags) => {
    if (title.trim() !== '' && content.trim() !== '') {

      try {
        console.log("creating..")
        await addDoc(getCurrenCollection(), {
          id: new Date().getMilliseconds.toString(),
          time: new Date().toDateString(),
          title,
          content,
          tags,
          ReadOnly: true,
          edited: false
        })
      } catch (e) {
        console.error(e)
      } finally {
        console.log("created..")
        setChange(change => change + 1)
        setMessage(true)
        setTimeout(() => { setMessage(false) }, 4000)
        settagCollection([])// resets the tag array eveytime a need note is added
        console.log("created")
      }

    } else {
      console.error("please fill in an input")
    }
  }

  return (

    <>

      <form className="form"
        onSubmit={(e) => removeDefault(e)}>
        <h1 className="title">TITLE</h1>
        <input className="title-input"
          onChange={e => newTitle(e)}
          placeholder="Title"
          required />
        <h1 className="content">CONTENT</h1>
        <textarea className="content-input"
          onChange={e => newContent(e)}
          placeholder="Content"
          required></textarea>
        <h1 className="tags">TAGS</h1>
        <div className="sub-class">
          <textarea className="tag-input"
            onChange={e => newTag(e)}
            placeholder="Add tag"></textarea>
          <button className="addtag-btn"
            onClick={() => addTag()}> <i className="fa-solid fa-plus "></i></button>
          {tagCollection.map((t, index) => (
            <Removetag key={index}
              text={t}
              removeTag={removeTag}
              id={index}
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



function Removetag({ text, removeTag, id, currentcollection }) {


  return (
    <div className="each-tag">
      #{text}
      <button className="removetag-btn" onClick={() => removeTag(id, currentcollection)}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}
