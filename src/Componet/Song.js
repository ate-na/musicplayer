import React from 'react';

const Song=({Curent})=>{    
    return(<div className="song-container">
    <img src={Curent.cover}/>
    <h3>{Curent.name}</h3>
    <h4>{Curent.artist}</h4>
    </div>)
}
export default Song;
 