import React from "react";
import classNames from "classnames";
import ImageTextComponent from "../ImageTextComponent";
import CarouselComponent from "../CarouselComponent";
import FeatureProducts from "../../containers/FeatureProducts";

class ColumnComponent extends React.Component {
    renderColumn(columnData, columns) {
        const currentInstance = this;

        const columnKeys = Object.keys(columnData).filter((key) => {
            return (key.indexOf("par-col") > -1);
        })

        return (
            <div className="row">
                {columnKeys && columnKeys.map((key, i) => {
                    return ( <div className={columns[columnData.columns]} key={i}>
                        {
                            Object.keys(columnData[key]).map((childKey, j) => {
                                if(childKey.indexOf('feature_products') > -1) {
                                    return <FeatureProducts featureProducts={columnData[key][childKey]} key={`feature-prod`+ j}/>
                                }
                                if(childKey.indexOf('carousel') > -1) {
                                    return <CarouselComponent key={j} className={''} carouselData={columnData[key][childKey]}/>
                                }
                                if(childKey.indexOf('column_control') > -1) {
                                    return (
                                        <div className={classNames(
                                                'column-control',
                                                columnData[key][childKey].cssClass
                                            )}>
                                            <div className={classNames(
                                                    columnData[key][childKey].isFullwidth ? 'container-fluid' : 'container',
                                                )} key={j}>
                                                { this.renderColumn(columnData[key][childKey], columns) }
                                            </div>
                                        </div>
                                    )
                                }
                                if(childKey.indexOf('image_text') > -1) {
                                    return ( <ImageTextComponent
                                       key={j}
                                       className={columnData[key][childKey]["cssClass"]}
                                       image={columnData[key][childKey]["imagePath"]}
                                       mobileImage={columnData[key][childKey]["mobileimagePath"]}
                                       isBackground={columnData[key][childKey]["isBackgroundImage"] ? true : false}
                                       title={columnData[key][childKey]["sectionTitle"]}
                                       subTitle={columnData[key][childKey]["sectionSubTitle"]}
                                       description={columnData[key][childKey]["sectionDesc"]}
                                       ctaText={columnData[key][childKey]["ctaLabel"]}
                                       ctaLink={columnData[key][childKey]["ctaLink"]}
                                    /> )
                                }
                            })
                        }
                    </div> )
                })}
            </div>
        )
    }
    render() {
      const {
          className,
          columnData
      } = this.props;

     const columns = {
         "1-col": "col-md-12",
         "2-col-equal": "col-md-6",
         "3-col-equal": "col-md-4 col-sm-6",
         "4-col-equal": "col-md-3"
     }
    return (
        <div className={classNames('column-control',columnData.cssClass)}>
            <div className={classNames(columnData.isFullwidth ? 'container-fluid' : 'container')}>
                { this.renderColumn(columnData, columns) }
            </div>
        </div>
    );
  }
}
export default ColumnComponent;
