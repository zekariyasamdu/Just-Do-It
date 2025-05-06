import { useState } from "react"
import Form from './Form'
import '../style/Added.css'
import Popup from "./popup"


// All our added elemets
export default function Added({ visible }) {

    let [message, setMessage] = useState(false)
    let [tasks, newtask] = useState([])
    function append(task, content, tags, reset) {
        if (task.trim() !== '' && content.trim() !== '') {
            newtask(t => [...t, { id: new Date(), task, content, tags, ReadOnly:true }])
            setMessage(true)
            setTimeout(() => { setMessage(false) }, 4000)

            reset() // resets the tag array eveytime a need note is added
        } else {
            console.error("please fill in an input")

        }
    }

    function del(id) {
        newtask(
            tasks.filter(t => (t.id !== id))
        )
    }

    function edit(id) {
        let editedTask = tasks.map(t => {
            return (id === t.id ? {...t, ReadOnly: false} : t)
        }
        )
        newtask(editedTask)
        console.log(editedTask)
    }



    return ( 
        <>
            {message && <Popup />}
            {visible && <Form append={append} />}

            <div className="added-container">
                {
                    tasks.map((item) => (
                        (item.ReadOnly === true)?
                        <div key={item.id} className="each-container">
                            <div className="added-title">{item.task}</div>
                            <div className="added-date">{item.id.toDateString()}</div>
                            <div className="added-content">{item.content}</div>
                            <div className="all-tags">{item.tags.map(t => (<div className="each-tag" key={t[0]}> #{t[1]}</div>))}</div>
                            <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                            <div className="edit-btn" onClick={() => edit(item.id)}> <i className="fa-solid fa-pen"></i> </div>
                        </div>:
                        <div key={item.id} className="each-container">
                        <div className="added-title">{item.task}</div>
                        <div className="added-date">{item.id.toDateString()}</div>
                        <div className="added-content">{item.content}</div>
                        <div className="all-tags">{item.tags.map(t => (<div className="each-tag" key={t[0]}> changed #{t[1]}</div>))}</div>
                        <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                        <div className="edit-btn" onClick={() => edit(item.id)}> <i className="fa-solid fa-pen"></i> </div>
                    </div>
                    ))
                }
            </div>

        </>

    )

}