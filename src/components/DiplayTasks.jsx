import '../style/Added.css'
import { removeDefault} from "../utils/utils"



// All our added elemets
export default function DiplayTasks({tasks, removeTag, settask}) {


    function del(id) {
        settask(
            tasks.filter(t => (t.id !== id))
        )
    }

    function edit(id) {
        let editedTask = tasks.map(t => {
            return (id === t.id ? { ...t, ReadOnly: false } : t)
        }
        )
        settask(editedTask)
    }

    return (
        <>

            <div className="added-container">
                {
                    tasks.map((item) => (
                        (item.ReadOnly === true) ?
                            <div key={item.id} className="each-container">
                                <div className="added-title">{item.task}</div>
                                <div className="added-date">{item.id.toDateString()}</div>
                                <div className="added-content">{item.content}</div>
                                <div className="all-tags">{item.tags.map(t => (<div className="each-tag" key={t[0]}> #{t[1]}</div>))}</div>
                                <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                                <div className="edit-btn" onClick={() => edit(item.id)}> <i className="fa-solid fa-pen"></i> </div>
                                {item.edited && <div className="edited-mark">Edited</div>}
                            </div> :
                            <form key={item.id} className="each-container" onSubmit={e => removeDefault(e)}>
                                <input value={item.task} />
                                <input value={item.content} />
                                {item.tags.map(t => (
                                    <div key={t[0]} >
                                        #{t[1]}
                                    </div>
                                ))}
                                <button type="submit" onClick={() => applyEdit(item.id)}>Done</button>
                            </form>
                    ))
                }
            </div>

        </>

    )

}