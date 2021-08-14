import React, { createContext, useState } from 'react';
import music from '../../Utill/music'

export const MusicContext=createContext();

export const MusicProvider=({Children})=>{
    const [Song,SetSong]=useState(music());
    const [CurentSong,SetCurentSong]=useState(Song[0]);
    return(
        <MusicContext.Provider value={[CurentSong,SetCurentSong]}>
            {Children}
        </MusicContext.Provider>
    )
}