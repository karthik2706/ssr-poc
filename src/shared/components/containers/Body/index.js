import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import { fetchBodyData } from "../../../reducers/body";

import Slider from "react-slick";
import ImageTextComponent from "../../common/ImageTextComponent";
import CarouselComponent from "../../common/CarouselComponent";
import ColumnComponent from "../../common/ColumnComponent";
import FeatureProducts from "../FeatureProducts";
import PersonalizedBanner from "../PersonalizedBanner";
import StickyPromotion from "../../../components/common/StickyPromo";
import StickyTrigger from "../../../components/common/StickyPromo/tester.js";

import TextImageCarouselComponent from "./../../common/TextImageCarouselComponent";

class Body extends React.Component {

  initialAction() {
    return fetchBodyData();
  }

  componentDidMount() {
    if (!this.props.body) {
      this.props.dispatch(this.initialAction());
    }
  }

  render() {
    const { body } = this.props;

    console.log(body);
    return (
        <div className="content-container">
            {body && Object.keys(body).map((key, i) => {
                  if(key.indexOf('carousel') > -1) {
                      return <CarouselComponent key={i} className={''} carouselData={body[key]}/>
                  }
                  if(key.indexOf('personalized_banner') > -1) {
                      return <PersonalizedBanner key={i}/>
                  }
                  if(key.indexOf('column_control') > -1) {
                      return <ColumnComponent key={i} className={''} columnData={body[key]}/>
                  }
                  if(key.indexOf('image_text') > -1) {
                      return <ImageTextComponent
                          key={i}
                         className={body[key]["cssClass"]}
                         image={body[key]["imagePath"]}
                         mobileImage={body[key]["mobileimagePath"]}
                         isBackground={body[key]["isBackgroundImage"] ? true : false}
                         title={body[key]["sectionTitle"]}
                         subTitle={body[key]["sectionSubTitle"]}
                         description={body[key]["sectionDesc"]}
                         ctaText={body[key]["ctaLabel"]}
                         ctaLink={body[key]["ctaLink"]}
                      />
                  }
                  if(key.indexOf('feature_product') > -1) {
                      return <FeatureProducts key={`feProducts`+1}/>
                  }
                  // render TextImageCarouselComponent on home page
                  if(key.indexOf('TextImageCarousel') > -1) {
                      return <TextImageCarouselComponent />
                  }
              })}
              {/* StickyTrigger has to be removed. Placed it here only to test sticky promo navigation */}
              {/* <StickyTrigger />
              <StickyPromotion /> */}
        </div>
    );
  }
}

const mapStateToProps = state => ({
    body: state.body.body,
    server: state.server.server
});

export default connect(mapStateToProps)(Body);
