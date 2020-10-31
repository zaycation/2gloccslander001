import React from "react";
import classes from "./BackgroundVideo.module.css";
import { Button } from "reactstrap";

const BackgroundVideo = () => {
  const videoSrc = "https://i.imgur.com/RQF1uvh.mp4";

  return (
    <div className={classes.Container}>
      <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
        <source src={videoSrc} type="video/mp4" />
        Your browser foes not support the video tag.
      </video>
      <div className={classes.Content}>
        <div className={classes.SubContent}>
          <h1>2 Glocs</h1>
          <p>Catch the hood's favorite gamehead, 2Glocs, live on Twitch.</p>
          <h5>
            2Glocs livestreams COD Warzone, Apex Legends, Fall Guys, and Rocket
            League
          </h5>
          <a
            href="https://www.twitch.tv/2glocs"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            id="twitchlink"
          >
            <Button outline color="secondary" size="lg">
              Click to Subscribe
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
