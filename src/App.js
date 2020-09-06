import React, { useState, useEffect } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {

  const [reels, setReels] = useState([]);
 
  
  useEffect(() => {
    //App component will runs ONCE when it loads
    db.collection('reels').onSnapshot(snapshot=>(
      setReels(snapshot.docs.map(doc => doc.data()))
      ))
  },[])
  
  return (
    <div className="app">
      <div className="app__logo">

        <img className="ig__logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="IG__logo" />

        <h3>
          Reels clone
        </h3>
      </div>


      <div className="app__videos">
        {console.log(reels)}

        
        {reels.map(({video,song,avatarSrc,likes,shares,channel})=>(  
          <VideoCard 
            video={video}
            song={song}
            avatarSrc={avatarSrc}
            likes={likes}
            shares={shares}
            channel={channel}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
