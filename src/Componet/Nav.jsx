import React from 'react';
const Nav=({setlibstatus})=>{
    const libHandler=()=>{
        setlibstatus((prev)=>!prev);
    }
    return(
        <div>
            <nav>
            <h2>Scutify</h2>
            <button onClick={libHandler}>
            <p>PlayList</p>
            <i className="fas fa-music"></i>
            </button>
            </nav>
        </div>
    )
}
export default Nav;