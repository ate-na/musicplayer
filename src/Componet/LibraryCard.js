import React from 'react';
const LibraryCard=({song, SetCurent,audioRef,isPlaying,SetSongs})=>{
    const selectSongHandler=async()=>{
        console.log(song);
        await SetCurent(song);
        if(isPlaying){
            audioRef.current.play();
        }
    // SetSongs((prev)=>prev.map((el)=>{
    //     if(el.id===song.id){
    //         // !el.active
    //         return({...el,active:true})
    //     }
    //     return ({...el,active:false})
    // }))
    }

    return(
        <div  className={`library-song ${song.active? 'selected':''}`}
        onClick={selectSongHandler}
        // className="library-song"
        >
           <img src={song.cover}/>
           <div className="song-decerition">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
           </div>
        </div>
    )
}
export default LibraryCard;