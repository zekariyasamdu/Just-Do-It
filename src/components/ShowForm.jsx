import { useEffect, useState } from "react"
import DiplayTasks from "./DiplayTasks.jsx"
import Form from "./Form.jsx"
import '../style/ShowForm.css'
import messageContext from '../Context/messageContext.jsx'
import Popup from "./popup.jsx"
import { getDocs, collection } from "firebase/firestore"

import { db } from "../config/firebase";


// ShowForm -> has the task of diplaying or not diplaying the Form component 
// More over is responsible for containing the main state that contains all the tasks and some states that are shared between sibling components.


export default function ShowForm() {
    
    const [tasks, settask] = useState([])

    const noteCollections = collection(db, "Notes")

    useEffect(()=>{

        const getData = async()=>{ 
            try{
            const data = await getDocs(noteCollections)
            console.log(data)
            }catch(e){
                console.log("Error", e)
            }
        }
        getData();

    }, [])
    
    const [tagCollection, settagCollection] = useState([])
    const [message, setMessage] = useState(false)

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
            {message && <Popup/>}
            {visible && <Form settask={settask} tagCollection={tagCollection} settagCollection={settagCollection} setMessage={setMessage} />}

            <messageContext.Provider value={setMessage}>
                <DiplayTasks tasks={tasks} settask={settask} />
            </messageContext.Provider>
        </>
    )
}

