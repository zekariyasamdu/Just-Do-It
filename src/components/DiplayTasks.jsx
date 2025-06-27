import { useContext } from 'react';
// components
import UpdateForm from './UpdateForm'
// contexts
import { dataBaseUpdatedContext } from "../context/DataBaseUpdatedContext.jsx"
// firebase
import { updateDoc, deleteField, deleteDoc } from "firebase/firestore";

// utils 
import {  getNoteReferance } from '../utils/utils.js';
// style
import '../style/DisplayTasks.css'


// All our added elemets
export default function DiplayTasks({ tasks}) {
    const [change, setChange] = useContext(dataBaseUpdatedContext)
    const del = async (id) => {
        try {
            console.log("Deleting...")
            await updateDoc(getNoteReferance(id), {
                time: deleteField(),
                title: deleteField(),
                content: deleteField(),
                tags: deleteField(),
                ReadOnly: deleteField(),
                edited: deleteField()
            });
            await deleteDoc(getNoteReferance(id));

        } catch (e) {
            console.error(e)
        } finally {
            console.log("Deleted!")
            setChange(change => change + 1)
        }

    }

    const edit = async (id) => {
        try {
            console.log("setting...")
            await updateDoc(getNoteReferance(id), {
                ReadOnly: false,
            });
        } catch (e) {
            console.error(e)
        } finally {
            console.log("finished...")
            setChange(change => change + 1)
        }
    }

    return (
        <>

            <div className="added-container">
                {
                    tasks.map((item) => (
                        (item.ReadOnly === true) ?
                            <div key={item.id} className="each-container">
                                <div className="added-title">{item.title}</div>
                                <div className="added-date">{item.time}</div>
                                <div className="added-content">{item.content}</div>
                                <div className="all-tags">{item.tags.map((t, index) => (<div className="each-tag" key={index}> #{t}</div>))}</div>
                                <div className="del-btn"
                                    onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                                <div className="edit-btn"
                                    onClick={() => edit(item.id)}> <i className="fa-solid fa-pen"></i> </div>
                                {item.edited && <div className="edited-mark">Edited</div>}
                            </div> :
                            <UpdateForm key={item.id} item={item} />
                    ))

                }
            </div>

        </>

    )

}