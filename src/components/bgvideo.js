import React from "react";
import classes from "./BackgroundVideo.module.css";
import { Col, Row } from 'reactstrap';

const BackgroundVideo = () => {
  const videoSrc = "https://i.imgur.com/RQF1uvh.mp4";

  return (
    <div>
      <div className="a1">
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video}>
          <source src={videoSrc} type="video/mp4" />
          Your browser foes not support the video tag.
        </video>
        <div className="a2">
          <Row>
            <Col>
              <h2>Lorem Ipsum Dolor idk the rest</h2>
              <h2>Lorem Ipsum Dolor idk the rest</h2>
              <h2>Lorem Ipsum Dolor idk the rest</h2>
              <h2>Lorem Ipsum Dolor idk the rest</h2>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
