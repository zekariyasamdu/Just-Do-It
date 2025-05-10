import { useContext, useRef} from "react"
import { removeDefault } from "../utils/utils"
import '../style/UpdateForm.css'
import messageContext from "../Context/messageContext"




export default function UpdateForm({ item, settask, tasks}) {
    const setMessage = useContext(messageContext)

    const newTitleContentRef = useRef(null);
    const newContentRef = useRef(null);

    function setTitle(e) {
        newTitleContentRef.current = e.target.value;
    }

    function setContent(e) {
        newContentRef.current = e.target.value;
    }


    function applyEdit(id) {


        if (newTitleContentRef.current.trim() !== '' && newContentRef.current.trim() !== '') {
            let newItem = tasks.map(t => {
                return (id === t.id ? { ...t, title: newTitleContentRef.current, content: newContentRef.current, ReadOnly: true, edited: true } : t)
            })
            settask(newItem)
            setMessage(true)
            setTimeout(() => { setMessage(false) }, 4000)

        }
        else {
            console.error("can't have an empty field")
        }
    }

    function cancel(id) {
        let newItem = tasks.map(t => {
            return (id === t.id ? { ...t, ReadOnly: true, } : t)
        })
        settask(newItem)
    }


    return (<>
        <form className="each-container" onSubmit={e => removeDefault(e)}>
            <input placeholder={item.title} onChange={(e) => setTitle(e)} />
            <input placeholder={item.content} onChange={(e) => setContent(e)} />
            <div className="all-tags">
                {item.tags.map(t => (
                    <div key={t[0]} className="each-tag">
                        #{t[1]}
                    </div>
                ))}
            </div>
            <div className="btn-container">
                <button className="cancel-btn" onClick={() => cancel(item.id)}>cancel</button>
                <button className="apply-edit-btn" type="submit" onClick={() => applyEdit(item.id)}>Done</button>
            </div>
        </form>
    </>)
}