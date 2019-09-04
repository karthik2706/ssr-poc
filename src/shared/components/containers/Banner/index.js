import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";

import CarouselHero2 from "../../common/CarouselHero-2";
import CarouselHero from "../../common/CarouselHero";

import "./index.scss";

class BannerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    var settings = {
      dots: false,
      speed: this.props.banner.scrollSpeed
        ? this.props.banner.scrollSpeed | 0
        : 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: this.props.banner.waitTime
        ? this.props.banner.waitTime | 0
        : 7000
    };
    return (
      <div ref={slider => (this.slider = slider)} className="carousel">
        <Slider {...settings}>
          {this.props.banner &&
            this.props.banner.bannerDetails &&
            this.props.banner.bannerDetails.map((item, i) => {
              if (
                (item.layout && item.layout === "multi-image") ||
                (!item.layout && i === 0)
              ) {
                return (
                  <div className="carousel-item" key={i.toString()}>
                    <CarouselHero2 data={item} />
                  </div>
                );
              }
              if (
                (item.layout && item.layout === "single-image") ||
                (!item.layout && i === 1)
              ) {
                return (
                  <div className="carousel-item" key={i.toString()}>
                    <CarouselHero data={item} />
                  </div>
                );
              }
            })}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  banner: state.body.body.banner
});

export default connect(mapStateToProps)(BannerComponent);
