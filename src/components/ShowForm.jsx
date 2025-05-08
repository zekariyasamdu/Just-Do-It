import { useState } from "react"
import DiplayTasks from "./DiplayTasks.jsx"
import Form from "./Form.jsx"
import '../style/ShowForm.css'


// ShowForm -> has the task of diplaying or not diplaying the Form component 
// More over is responsible for containing the main state that contains all the tasks and some states that are shared between sibling components.


export default function ShowForm() {

    let [tasks, settask] = useState([])
    const [tagCollection, settagCollection] = useState([])


    // toggling logic 
    const [visible, setVisibility] = useState(false)
    function toggler() {
        setVisibility(visible === false ? true : false)
    }

    return (
        <>
            <button className="add" onClick={toggler}>
                <i className="fa-solid fa-plus"></i>
            </button>

            {visible && <Form settask={settask} tagCollection={tagCollection} settagCollection={settagCollection}  />}

            <DiplayTasks tasks={tasks} settask={settask} />
        </>
    )
}

