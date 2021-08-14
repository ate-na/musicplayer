import React from 'react';
import LibraryCard from './LibraryCard';
const Library=({libstatus,Songs, SetCurent,audioRef,isPlaying,SetSongs})=>{
        return(
            
        <div className={`library ${libstatus? 'library-active':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
            {Songs.map((song)=>{
                return <LibraryCard 
                audioRef={audioRef} 
                SetCurent={SetCurent} 
                song={song} 
                isPlaying={isPlaying}
                key={song.id}
                SetSongs={SetSongs}
                />
            })}
            </div>
        </div>
    )
}
export default Library;