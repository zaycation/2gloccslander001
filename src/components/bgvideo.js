import React from "react";
import { Row, Col, Container } from "reactstrap";
import classes from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  const videoSrc = "https://i.imgur.com/RQF1uvh.mp4";

  return (
    <Container>
      <Row>
        <Col>
          <div className={classes.Container}>
            <video
              autoPlay="autoplay"
              loop="loop"
              muted
              className={classes.Video}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser foes not support the video tag.
            </video>
            <div className={classes.Content}>
              <div className={classes.SubContent}>
                <h1>2 Glocs</h1>
                <p>
                  Stream 2 Glocs on Twitch on Tuesdays, Thursdays, and weekends.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Click to Subscribe
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BackgroundVideo;
