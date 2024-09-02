import React, { useRef } from "react";
import useVideoPlayer from "./VideoPlayer";

const ContentSource = ({source,details}) => {
    console.log("The source is", details)
  const videoElement = useRef(null);
  const { playerState, togglePlay, handleOnTimeUpdate } =
    useVideoPlayer(videoElement);

  return (
    <>
      <p className="section-head mm-15"> Preview</p>
      <div className="media-contaier">
        <div className="video-wrapper">
          <video
            src={source.src}
            ref={videoElement}
            onTimeUpdate={handleOnTimeUpdate}
          />
          <div className="controls">
            <div className="actions">
              <button className="mainBtn" onClick={togglePlay}>
                {!playerState.isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <polygon
                      className="play-btn__svg"
                      points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pause"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="video-description"> 
           {details.map((item,i)=>{
            return(
            <div  key={i}>
                    <p className="desc mm-15"> {item.title}</p>
                    <p className="desc mm-15"> {item.desc}</p>
                    <br/>
                    </div>
            )
             
           })}
           </div>
      </div>
    </>
  );
};
export default ContentSource;
