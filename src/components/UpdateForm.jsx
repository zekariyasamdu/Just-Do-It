import { useContext, useRef } from "react"
// context
import {messageContext} from "../Context/messageContext"
import { dataBaseUpdatedContext } from "../Context/DataBaseUpdatedContext"
// style
import '../style/UpdateForm.css'
// utils
import { getNoteReferance, removeDefault } from "../utils/utils"
import { updateDoc } from "firebase/firestore"


export default function UpdateForm({ item }) {
    // contexts 
    const [message, setMessage] = useContext(messageContext)
    const [change, setChange] = useContext(dataBaseUpdatedContext)

    const newTitleContentRef = useRef();
    const newContentRef = useRef();

    function setTitle(e) {
        newTitleContentRef.current = e.target.value;
    }

    function setContent(e) {
        newContentRef.current = e.target.value;
    }


    const applyEdit = async (id) => {


        if (newTitleContentRef.current.trim() !== '' && newContentRef.current.trim() !== '') {
            try {
                await updateDoc(getNoteReferance(id), {
                    title: newTitleContentRef.current,
                    content: newContentRef.current,
                    ReadOnly: true,
                    edited: true
                })
            } catch (e) {
                console.error(e)
            } finally {
                setChange(change => change + 1)
                setMessage(true)
                setTimeout(() => { setMessage(false) }, 4000)
            }
        }
        else {
            console.error("can't have an empty field")
        }
    }

    const cancel = async (id) => {
        try {
            await updateDoc(getNoteReferance(id), {
                ReadOnly: true
            })
        } catch (e) {
            console.error(e)
        } finally {
            setChange(change => change + 1)
        }
    }


    return (<>
        <form className="each-container"
            onSubmit={e => removeDefault(e)}>
            <input placeholder={item.title}
                onChange={(e) => setTitle(e)} />
            <input placeholder={item.content}
                onChange={(e) => setContent(e)} />
            <div className="all-tags">
                {item?.tags?.map(t => (
                    <div key={t[0]}
                        className="each-tag">
                        #{t[1]}
                    </div>
                ))}
            </div>
            <div className="btn-container">
                <button className="cancel-btn"
                    onClick={() => cancel(item.id)}>cancel</button>
                <button className="apply-edit-btn"
                    type="submit"
                    onClick={() => applyEdit(item.id)}>Done</button>
            </div>
        </form>
    </>)
}