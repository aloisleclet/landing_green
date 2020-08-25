import React, { Component } from 'react';
import ReactPlayer from 'react-player';

const Video = (props) => (
  <div className="video-container">
    <ReactPlayer playIcon="true" url={props.url} /> 
  </div>
);

export default Video;

