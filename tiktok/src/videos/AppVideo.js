import {useRef} from 'react'
import Video from "./Video";

function AppVideo(){
    const videoRef = useRef();
    return(
        <div>
            <hr></hr>
            <h1>Use forward ref</h1>
            <Video ref={videoRef} />
            <div>
                <button onClick={()=> {videoRef.current.play()}}>Play</button>
                <button onClick={()=>{videoRef.current.pause()}}>Pause</button>
            </div>
        </div>
    )
}
export default AppVideo;