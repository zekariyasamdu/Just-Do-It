import { useState } from "react"
import Form from './Form'
import '../style/Added.css'
import Popup from "./popup"

// All our added elemets
export default function Added({ visible }) {

    let [tasks, newtask] = useState([])
    let [message, setMessage] = useState(false)
    function append(task, content, tags, reset) {
        if (task.trim() !== '' && content.trim() !== '') {
            newtask(t => [...t, { id: new Date(), task, content, tags }])
            setMessage(true)
            setTimeout(()=> {setMessage(false)}, 4000)
            reset()
        } else {
            console.error("please fill in an input")

        }
    }

    function del(id) {
        newtask(
            tasks.filter(t => (t.id !== id))
        )
    }


    return (
        <>
            {message && <Popup/>}
            {visible && <Form append={append} />}

            <div className="added-container">
                {
                    tasks.map((item) => (
                        <div key={item.id} className="each-container">
                            <div className="added-title">{item.task}</div>
                            <div className="added-date">{item.id.toDateString()}</div>
                            <div className="added-content">{item.content}</div>
                            <div className="all-tags">{item.tags.map(t => (<div className="each-tag" key={t[0]}> #{t[1]}</div>))}</div>
                            <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                        </div>
                    ))
                }
            </div>

        </>

    )

}