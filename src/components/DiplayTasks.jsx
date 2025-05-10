import '../style/DisplayTasks.css'
import UpdateForm from './UpdateForm'


// All our added elemets
export default function DiplayTasks({tasks, settask}) {


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
                                <div className="added-title">{item.title}</div>
                                <div className="added-date">{item.id.toDateString()}</div>
                                <div className="added-content">{item.content}</div>
                                <div className="all-tags">{item.tags.map(t => (<div className="each-tag" key={t[0]}> #{t[1]}</div>))}</div>
                                <div className="del-btn" onClick={() => del(item.id)}><i className="fa-solid fa-xmark"></i></div>
                                <div className="edit-btn" onClick={() => edit(item.id)}> <i className="fa-solid fa-pen"></i> </div>
                                {item.edited && <div className="edited-mark">Edited</div>}
                            </div> :
                            <UpdateForm key={item.id} item={item} settask={settask} tasks={tasks} />
                    ))
                }
            </div>

        </>

    )

}