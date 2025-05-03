import { useState } from "react"
import Form from './Form'

// All our added elemets
export default function Added({ visible }) {

    let [tasks, newtask] = useState([])

    function append(task) {
        newtask(t => [...t, { id: Date.now(), task }])
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
                        <div key={item.id}>
                            {item.task}
                            <button onClick={() => del(item.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>

        </>

    )

}