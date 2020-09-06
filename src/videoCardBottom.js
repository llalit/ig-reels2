import React from 'react'
import './videofooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';
import { Button, Avatar } from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';



function VideoCardBottom({channel, song,   likes,    shares, avatarSrc}) {
    return (
        <div className="videoFooter">
           <div className="videoFooter__text">

               <Avatar src={avatarSrc}/>
                <h3>
                    {channel} • <Button><p className="follow__button">Follow</p></Button>
                </h3>
           </div>

           <div className="videoFooter__ticker">

               <MusicNoteIcon  className="videoFooter__icon"
                   />
               <Ticker mode="smooth">
                    {({index})=>(
                        <>
                            <h1>{song}</h1>
                        </>
                    )}
               </Ticker>
           </div>

           <div className="videoFooter__actions">

               <div className="videoFooter__actionLeft">
                      <FavoriteIcon fontSize="large" />
                      <ModeCommentIcon fontSize="large" />
                      <SendIcon fontSize="large" />
                      <MoreHorizIcon fontsize='large' />  
               </div>

               <div className="videoFooter__actionRight">

                       <div className="videoFooter__stat">
                            <FavoriteIcon />
                            <p>{likes}</p>   
                        </div> 

                        <div className="videoFooter__stat">
                            <ModeCommentIcon />
                            <p>{shares}</p>
                        </div>
               </div>
           </div>
        </div>
    )
}

export default VideoCardBottom;
