import { forwardRef } from "react";
import video1 from './video1.mp4'

function Video(props,ref){
    return(
        <video src={video1} style={{heigh: '200px', width: '200px'}} ref={ref} />
    )
}
export default forwardRef(Video);