import React from 'react';
import { connect } from "react-redux";

import VideoBannerComponent from '../../../common/VideoBannerComponent';
import CarouselHero from '../../../common/CarouselHero';
import CarouselHero2 from '../../../common/CarouselHero-2';
import Header from '../../../containers/Header';
import TextImageCarouselComponent from '../../../common/TextImageCarouselComponent';
import BannerComponent from '../../../containers/Banner';
import { fetchBodyData, detectDevice } from "../../../../reducers/body";
import StickyPromotion from '../../../common/StickyPromo';
import StickyTrigger from '../../../common/StickyPromo/tester.js';
import ColumnControl from '../../../containers/ColumnControl';

class HomePage extends React.Component {

    static initialActions() {
      return [fetchBodyData()];
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(detectDevice());
    }

    isColumnControl(itemCode) {
      return !!itemCode.match('columncontrol');
    }
  
    render() {
        const { body } = this.props;
        return (
          <div className="HomePage">
              {body && body.componentOrder && body.componentOrder.map((item, i) => {
                  if (item === 'header') {
                    return <Header key={i.toString()}/>
                  }
  
                  if (item === 'banner') {
                    return <BannerComponent key={i.toString()}/>
                  }
  
                  if (item === 'textwithvideo') {
                    return <VideoBannerComponent key={i.toString()}/>
                  }
  
                  if (item === 'imageandtextcarousel') {
                    return <TextImageCarouselComponent key={i.toString()}/>
                  }

                  if (this.isColumnControl(item)) {
                    return <ColumnControl code={item} content={body[item]} key={i.toString}/>
                  }
                })
              }
              
              <StickyPromotion />
          </div>
        );
    }
  }

  const mapStateToProps = state => ({
    body: state.body.body,
    isMobile: state.body.isMobile
  });

export default connect(mapStateToProps)(HomePage);