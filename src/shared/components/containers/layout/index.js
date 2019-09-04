import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import classNames from "classnames";
import ColumnControl from "../ColumnControl";
import TextComponent from "../../common/TextComponent";
import Header from "../Header";
import BannerComponent from "../Banner";
import VideoBannerComponent from "../../common/VideoBannerComponent";
import TextImageCarouselComponent from "../../common/TextImageCarouselComponent";

class Layout extends React.Component {
  
  getComponentType(aemComponentCode) {
    if (this.isColumnControl(aemComponentCode)) {
      return 'columncontrol'
    } else {
      const lastIndex = ~aemComponentCode.lastIndexOf('_');
      if (lastIndex) {
        return aemComponentCode.substring(0, aemComponentCode.lastIndexOf('_'));
      } else {
        return aemComponentCode;
      }
    }
  }

  isColumnControl(itemCode) {
    return !!itemCode.match('column_control');
  }

  render() {
    const {
      content
    } = this.props;

    return (
      <div>
              {content && content[':itemsOrder'].map((item, i) => {
                  let componentType = this.getComponentType(item);

                  if (componentType === 'header') {
                    return <div className="column-control-cell"><Header key={i.toString()}/></div>
                  }
  
                  if (componentType === 'banner') {
                    return <div className="column-control-cell"><BannerComponent key={i.toString()}/></div>
                  }
  
                  if (componentType === 'textwithvideo') {
                    return <div className="column-control-cell"><VideoBannerComponent key={i.toString()}/></div>
                  }
  
                  if (componentType === 'imageandtextcarousel') {
                    return <div className="column-control-cell"><TextImageCarouselComponent key={i.toString()}/></div>
                  }

                  if (componentType === 'text' || componentType === 'textimage') {
                    return <div className="column-control-cell"><TextComponent key={i.toString()} text={content[':items'][item].text}/></div>
                  }

                  if (this.isColumnControl(componentType)) {
                    return <ColumnControl code={item} content={content[item]} key={i.toString}/>
                  }
                })
              }
          </div>
    );
  }
}

//export default connect(mapStateToProps)(Footer);
export default Layout;