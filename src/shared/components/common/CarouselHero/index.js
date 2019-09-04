import React from "react";
import './CarouselHero.scss';

class CarouselHero extends React.Component {
    render() {
		const primaryImage = this.props.data.image;
      return (
        <div className="hero-component-wrapper">
          <div className="col-12 p-0 p-md-1">
            <div className="details-wrapper">
              <div className="section-title">
                <h2 className="title">
                  <strong>{this.props.data.titleBold}</strong> {this.props.data.titleNormal}
                </h2>
              </div>
              <div className="section-subtitle" dangerouslySetInnerHTML={{__html: this.props.data.description}}>
              </div>
              <div className="section-links d-none d-md-block">
                <a href={this.props.data.ctaOneLink} className="link">{this.props.data.ctaOneText}</a>
                <a href={this.props.data.ctaTwoLink} className="link">{this.props.data.ctaTwoText}</a>
                <a href={this.props.data.ctaThreeLink} className="link">{this.props.data.ctaThreeText}</a>
              </div>
            </div>
            <div className="image-wraper" style={{backgroundImage: 'url(' + primaryImage + ')'}}>
            </div>
          </div>
          <div className="section-links d-md-none">
            <a href={this.props.data.ctaOneLink} className="link">{this.props.data.ctaOneText}</a>
                <a href={this.props.data.ctaTwoLink} className="link">{this.props.data.ctaTwoText}</a>
                <a href={this.props.data.ctaThreeLink} className="link">{this.props.data.ctaThreeText}</a>
          </div>
        </div>
      );
  }
}
export default CarouselHero;
