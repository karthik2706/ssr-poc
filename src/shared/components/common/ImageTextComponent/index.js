import React from "react";
import classNames from "classnames";
import Constants from "../../../Constants";

class ImageTextComponent extends React.Component {
  render() {
    return (
        <div className={classNames(
                'image-text ',
                this.props.className
            )}>
            <div className="image-text__image-wrapper">
              {this.props.image && this.props.isBackground &&
                  <picture className={classNames(
                      'image-text__image ',
                      {' background': this.props.isBackground}
                  )}>
                      <source media="(min-width: 451px)" srcSet={Constants.AEM_URL + this.props.image} />
                      <source media="(max-width: 450px)" srcSet={Constants.AEM_URL + this.props.mobileImage} />
                      <img src={Constants.AEM_URL + this.props.image} alt="alt" />
                  </picture>
              }
              {this.props.image && !this.props.isBackground && <img className={classNames(
                      'image-text__image ',
                      {' background': this.props.isBackground}
                  )} src={Constants.AEM_URL + this.props.image}

                     style={{position:'relative'}}
                  />}
            </div>
            <div className="image-text__wrapper">
                {this.props.title && <h3 className="image-text__title">{this.props.title}</h3>}
                {this.props.subTitle && <h4 className="image-text__subtitle">{this.props.subTitle}</h4>}
                {this.props.description && <p className="image-text__desc">{this.props.description}</p>}
                {this.props.ctaText && <a className="image-text__cta" href={this.props.ctaLink}>{this.props.ctaText}</a>}
            </div>
        </div>
    );
  }
}
export default ImageTextComponent;
