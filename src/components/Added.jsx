import { useState } from "react"
import Form from './Form'
import '../style/Added.css'

// All our added elemets
export default function Added({ visible }) {

    let [tasks, newtask] = useState([])

    function append(task , content, tags, reset) {
        newtask(t => [...t, { id: new Date(), task, content, tags}])
        reset()
    }

    function del(id) {
        newtask(
            tasks.filter(t => (t.id !== id))
        )
    }


    return (
        <>

            {visible && <Form append={append} />}

            <div className="added-container">
                {
                    tasks.map((item) => (
                        <div key={item.id} className="each-container">
                            <div className="added-title">{item.task}</div>
                            <div className="added-date">{item.id.toDateString()}</div>
                            <div className="added-content">{item.content}</div>
                            <div className="all-tags">{item.tags.map(t =>(<div className="each-tag" key={t[0]}> #{t[1]}</div>))}</div>
                            <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                        </div>
                    ))
                }
            </div>

        </>

    )

}