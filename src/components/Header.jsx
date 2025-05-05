import '../style/Header.css'


export default function Header() {
    return (
        <div className="header">
            <h2 className="name" >Notes</h2>
            <input className="search" placeholder="Search Notes" />
            <div className="user">
                <div className="user-info profile">TU</div>
                <p className="user-info user-name">Test user</p>
                <a className="user-info logout" href="./">Logout</a>
            </div>

        </div>
    )
}