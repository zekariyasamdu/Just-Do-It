import { useContext, useEffect, useState } from "react"
// contexts
import { messageContext } from '../Context/messageContext.jsx'
// components 
import DiplayTasks from "./DiplayTasks.jsx"
import Form from "./Form.jsx"
import Popup from "./Popup.jsx"
// firebase
import { getDocs } from "firebase/firestore"
import { dataBaseUpdatedContext } from "../Context/DataBaseUpdatedContext.jsx"
// style 
import '../style/ShowForm.css'
import { getCurrenCollection } from "../utils/utils.js"

// ShowForm -> has the task of diplaying or not diplaying the Form component 
// More over is responsible for containing the main state that contains all the tasks and some states that are shared between sibling components.


export default function ShowForm() {
    // contexts 
    const [change] = useContext(dataBaseUpdatedContext)
    const [message] = useContext(messageContext)

    const [tasks, settask] = useState([])
    const [tagCollection, settagCollection] = useState([])


    useEffect(() => {

        const getData = async () => {

            try {
                console.log("loging...")
                const data = await getDocs(getCurrenCollection())
                const wantedData = data.docs?.map((doc) => ({
                    ...doc.data(),
                    id: doc.id

                }))
                settask(wantedData)
            } catch (e) {
                console.error("Error", e)
            } finally {
                console.log("finished")
            }
        }
        getData();

    }, [change])

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
            {message && <Popup />}
            {visible && <Form settask={settask}
                tagCollection={tagCollection}
                settagCollection={settagCollection}
            />}

            <DiplayTasks tasks={tasks} />

        </>
    )
}

