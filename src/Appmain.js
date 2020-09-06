import React from 'react'
import './Appmain.css';
import VideoCard from './VideoCard';

function ReelsUiOne(video) {
    return (
        <div className="app">
            <div className="app__logo">
                <h3 className="heading__igclone">
                    Reels clone
            </h3>
            </div>
            <div className="iglogo__clone">
                <img className="ig__logo" src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="IG__logo" />
            </div>


            <div className="app__videos">
                <video src="https://instagram.fixc7-1.fna.fbcdn.net/v/t50.2886-16/118698059_4253830441357501_487797962962815597_n.mp4?_nc_ht=instagram.fixc7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=ZGyw3VDQlYgAX8DO1Yn&oe=5F53C9E1&oh=10fd3693f7073d714bf419d750efd21b"></video>
            </div>

        </div>
    );
}

export default ReelsUiOne
