    import Added from "./added";


    export default function Button({ kind }) {


        function Add() {
            let input = document.querySelector('.input');
            <Added text={input.value} />
        }


        if (kind === "A") {
            return (
                <button onClick={Add} className="button" >Add</button>

            )
        }
        else if (kind === "D") {
            return (<button onClick={Add} className="button" >Delete</button>)
        } else {
            return (<button onClick={Add} className="button"> Done</button>)
        }

    }