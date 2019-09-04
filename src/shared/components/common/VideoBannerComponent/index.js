import React from "react";
import { connect } from "react-redux";
import "./index.scss";

class VideoBannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="VideoBannerComponent">
        <video
          autoPlay
          loop
          muted
          preload="auto"
          className="VideoBannerComponent__video"
        >
          <source src={this.props.textwithvideo.videoPath} type="video/mp4"/>
        </video>
        <div className="VideoBannerComponent__banner">
          <img
            className="VideoBannerComponent__logo"
            alt="brand logo"
            src={this.props.textwithvideo.logo}
          />
          <p className="VideoBannerComponent__banner-description">
            {this.props.textwithvideo.description}
          </p>
          <p className="VideoBannerComponent__banner-link">
            <a
              className="VideoBannerComponent__banner-link-item"
              href={this.props.textwithvideo.ctalink}
            >
              {this.props.textwithvideo.ctaText}
            </a>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    textwithvideo: state.body.body.textwithvideo
  };
};

export default connect(mapStateToProps)(VideoBannerComponent);
