import React, { useState,useRef,useEffect } from 'react';
import Song from './Componet/Song';
import Play from './Componet/Play';
import './Style/app.scss'
import music from './Utill/music'
import Library from './Componet/Library';
import Nav from './Componet/Nav';
import {Helmet} from 'react-helmet'
function App(){
  const audioRef=useRef(null);
  const [isPlaying,SetisPlaying]=useState(false); 
  const [Songs,SetSongs]=useState(music());
  const [Curent,SetCurent]=useState(Songs[2]);
  const [libstatus,setlibstatus]=useState(false)
  useEffect(() => {
    SetSongs((prev)=>prev.map((el)=>{
      if(el.id===Curent.id){
          // !el.active
          return({...el,active:true})
      }
      return ({...el,active:false})
  }))
  }, [Curent]);
  return(
      <div  className={`App ${libstatus?'active-library-mode':''}`}>
        <Nav setlibstatus={setlibstatus}/>
          <Song Curent={Curent}/>
          <Play audioRef={audioRef} Curent={Curent} isPlaying={isPlaying} SetisPlaying={SetisPlaying} Songs={Songs} SetCurent={SetCurent}/>
          <Library libstatus={libstatus} SetSongs={SetSongs} audioRef={audioRef} Songs={Songs} SetCurent={SetCurent} isPlaying={isPlaying}/>
      </div>
    )
}
export default App