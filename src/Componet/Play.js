import React,{useRef,useState}  from 'react';
import arowsong from '../Style/icons/arrow.svg'
import playSong from '../Style/icons/play.svg'
import pause from '../Style/icons/pause.svg'

const Play=({Curent,audioRef,isPlaying,SetisPlaying,SetCurent,Songs})=>{
   const [songInfo,setsongInfo]=useState({currentTime:0,duration:0,animationPrecentAge:0})
//    const [isPlaying,SetisPlaying]=useState(false); 
   
    const SongInfoHandler=(e)=>{
        const currentTime=e.target.currentTime;
        const duration=e.target.duration;
        const animationPrecentAge=Math.round((currentTime/duration)*100);
        setsongInfo({...songInfo,currentTime:currentTime,duration:duration,animationPrecentAge:animationPrecentAge});
    }
    const dragHandler=(e)=>{
        setsongInfo({...songInfo,currentTime:e.target.value});
        audioRef.current.currentTime=e.target.value;
        // console.log(e.target.value);
    }
    const playmusic=()=>{
        if(isPlaying){
            audioRef.current.pause();
            SetisPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            SetisPlaying(!isPlaying);
        }
    }
    const gettime=(time)=>{
        return(
            Math.floor(time/60) + ":"+('0'+Math.floor(time%60)).slice(-2)
        )
    }
    const EndedHandler=()=>{
        moveTrackHandler('forward')
    }
    const moveTrackHandler=async(direction)=>{
        let curentIndex=Songs.findIndex((song)=>song.id===Curent.id)
        if(direction==='forward'){
            await SetCurent(Songs[(curentIndex+1) %Songs.length ])
        }
        if(direction==='backward'){
            if(curentIndex-1===-1){
                await SetCurent(Songs[Songs.length-1])
            if(isPlaying) audioRef.current.play();
                return null;
            }
            await SetCurent(Songs[curentIndex-1])
        }
        if(isPlaying) audioRef.current.play();
    }
    const antimate={
        transform:`translateX(${songInfo.animationPrecentAge}%)`
    }
    const colortrag={
         background: `linear-gradient(to right,${Curent.color[0]},${Curent.color[1]}`    
    }
    return(
        <div  className="play">
            <div className="time-control">
                <p>{gettime(songInfo.currentTime)}</p>
                <div style={colortrag} className="track">
                <input 
                    
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    
                    type="range" onChange={dragHandler}/>
                 <div style={antimate} className="antimate-Track"></div>
                </div>
                <p>{songInfo.duration? gettime(songInfo.duration):"0:00"}</p>
            </div>
            <div className="play-control">
                <img src={arowsong} className="icons" onClick={()=>moveTrackHandler('backward')} />
            {isPlaying ?<img src={pause} className="icons"  onClick={playmusic}/>:   
                <img src={playSong} className="icons" onClick={playmusic} />}
                <img src={arowsong} className="icons"  style={{transform:'scaleX(-1)'}} onClick={()=>moveTrackHandler('forward')}/>
            </div>
            <audio onEnded={EndedHandler} onTimeUpdate={SongInfoHandler} onLoadedData={SongInfoHandler} ref={audioRef} src={Curent.audio}></audio>
        </div>
    )
}
export default Play;
