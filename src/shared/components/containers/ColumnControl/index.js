import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import classNames from "classnames";
import Layout from '../layout';

class ColumnControl extends React.Component {

  getColumnClassName(ratio) {
    ratio = ratio | 0;
    if (typeof ratio === "number") {
      return `col-md-${(12*ratio)/100}`;
    } else {
      '';
    }
  }

  render() {
    const {
      code,
      content
    } = this.props;

    console.log('content', content);

    return (
      <div className="column-control row">
        {content && content[':itemsOrder'] && (content[':itemsOrder'].map((parSysId, i)=>{
          const colClassName = this.getColumnClassName(content.columns[i]);
          if (colClassName) {
            return (<div className={colClassName} key={i.toString()}>
              <Layout content={content[':items'][parSysId]}/>
            </div>)
          }
        }))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  footer: state.footer.footer,
  footerList1: state.footer.footer ? state.footer.footer.linkList : [],
  footerLogoList: state.footer.footer ? state.footer.footer.logosList : {},
  footerQuickLinks: state.footer.footer
    ? state.footer.footer.quickLinksList
    : [],
  appList: state.footer.footer ? state.footer.footer.appList : []
});

//export default connect(mapStateToProps)(Footer);
export default ColumnControl;