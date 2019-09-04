import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from 'react-redux';
import "./index.scss";

class TextImageCarouselComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    var settings = {
      dots: false,
      speed: 1000,
      slidesToShow: 3.5,
      slidesToScroll: 3,
      infinite:false,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.8,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
    };
    return (
      <div className="text-image-carousel-wrapper">
        <div className="line"></div>
        <div className="image-carousel">
          <div className="text">
            <h2 className="text-title">{this.props.carouselData.heading}</h2>
            <p className="text-description">{this.props.carouselData.description}</p>
          </div>
          <div className="carousel">
          <Slider {...settings}>
          {this.props.carouselData.configItems && this.props.carouselData.configItems.map((item, i) => {
            return <div className="carousel-item" key={i.toString()}>
                    <img src={item.imagePath} />
                    <p className="carousel-item__heading">{item.imageHeading}</p>
                    <p className="carousel-item__discount">{item.dicountPrice}</p>
                    <p className="carousel-item__actual">{item.actualPrice}</p>
                  </div>
          })
          }
          </Slider>
          </div>
        </div>
        <div className="line"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      carouselData: state.body.body.imageandtextcarousel
  };
};

export default connect(mapStateToProps)(TextImageCarouselComponent);