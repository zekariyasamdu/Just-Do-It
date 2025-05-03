import { useState } from "react"
import Added from "./Added.jsx"


export default function Add() {

    const [visible, setVisibility] = useState(false)
    function toggler () {
        setVisibility(visible === false? true: false)
    }

    return (
        <>
            <button className="add" onClick={toggler}>
                <i className="fa-solid fa-plus"></i>
            </button>

        <Added visible={visible}/>
        </>
    )
}

