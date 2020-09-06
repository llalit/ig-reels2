import React, { useState, useRef } from 'react'
import './videoCard.css';
import VideoHeader from './VideoHeader';
import VideoCardBottom from './videoCardBottom';


function VideoCard({ video, channel, shares, song, url , likes, avatarSrc}) {

    const [isVideoPlaying, setisVideoPlaying] = useState(false);

    const  videoRef = useRef(null);

    const onVideoPress=()=>{
        if(isVideoPlaying){
            //videopause()
            videoRef.current.pause();
            setisVideoPlaying(false);
        }
        else{
            videoRef.current.play(); 
            setisVideoPlaying(true);
        }
    }
    
    return (

        <div className="maincard">

            <div class="video__container">

                <VideoHeader />



                <video
                    loop
                    ref={videoRef}
                    onClick={onVideoPress}
                    className="reels__video"
                    src={video}
                    
                    />

                
                    <VideoCardBottom  
                        url={url}
                        song={song}
                        channel={channel}
                        likes={likes}
                        shares={shares}
                        avatarSrc={avatarSrc}
                    />

            </div>



        </div>
    )
}

export default VideoCard;
