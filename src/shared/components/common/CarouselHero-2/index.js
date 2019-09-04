import React from "react";
import './index.scss';

class CarouselHero2 extends React.Component {
    render() {
      console.log('data Carousel', this.props.data);
      const promoImg = '../../../../assets/images/image3x.jpg';
      return (
        <div>
          <div className="image-with-float-multi-img-n-text">
            <div className="float-text-col">
              <div className="sale-component">
                  <div className="floating-sale-type">
                      <span>{this.props.data.titleBold}&nbsp;</span><span className="lighter-text">{this.props.data.titleNormal}</span>
                  </div>
                  {/* //dangerouslySetInnerHTML={{__html: post.content.rendered}} */}
                  <div className="sale-details">
                      <div dangerouslySetInnerHTML={{__html: this.props.data.description}}></div>
                      {/* <div className="sale-percentage">Take an extra 15% off</div>
                      <div className="promo-valid-till-section">
                          <div className="promo-code">Promo Code: SHOES19</div>
                          <div className="valid-till">Ends March 31</div>
                      </div> */}
                      <div className="links-to-page"><a href={this.props.data.ctaOneLink}>{this.props.data.ctaOneText}</a></div>
                  </div>
              </div>
            </div>

            <div className="primary-image-col">
              <div style={{backgroundImage: 'url(' + this.props.data.image + ')'}}></div>
            </div>

            <div className="float-image-col">
                <div className="image-brand">
                    <div className="image-brand-1">
                        <img src={this.props.data.foregroundImageDesktop} alt={this.props.data.foregroundAltTextDesktop}/>
                    </div>
                    <div className="image-brand-2">
                        <img src={this.props.data.foregroundImageMobile} alt={this.props.data.foregroundAltTextDesktopMobile}/>
                    </div>
                </div>
            </div>
          </div>
          <div className="links-to-page mobile-links-to-page">
            <a href={this.props.data.ctaOneLink}>{this.props.data.ctaOneText}</a>
          </div>
          
        </div>
      );
  }
}
export default CarouselHero2;
