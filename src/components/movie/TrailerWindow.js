import React from 'react'
import YouTube from 'react-youtube';

const TrailerWindow = ({ setShowTrailerWindow, trailerID }) => {

    const options = {
        height: '390',
        width: '640',
        playerVars: { autoplay: 1 }
    }

    const _onReady = (e) => {
        e.target.playVideo();
    }

    return (
        <div 
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center cursor-pointer"
            onClick={() => setShowTrailerWindow(false)}
        >
                <YouTube
                    containerClassName="w-full md:max-w-2xl p-2"  
                    className="w-full"
                    videoId={trailerID}
                    opts={options}
                    onReady={_onReady}
                />
        </div>
    )
}

export default TrailerWindow
