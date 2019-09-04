import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import { fetchFooterData } from "../../../reducers/footer";
import classNames from "classnames";
import Constants from "../../../Constants";

class Footer extends React.Component {
  initialAction() {
    return fetchFooterData();
  }

  componentDidMount() {
    if (!this.props.footer) {
      this.props.dispatch(this.initialAction());
    }
  }

  render() {
    const {
      footer,
      footerList1,
      footerLogoList,
      footerQuickLinks,
      appList
    } = this.props;

    return (
      <div className="footer-container">
        {footer && (
          <div
            className={classNames("footer-style container", footer.cssClass)}
          >
            <div className="col-md-12 footer-content nav-folderized">
              <div className="footer-logo-image text-center">
                <img
                  src={
                    Constants.AEM_URL +
                    JSON.parse(footerLogoList).imagePath
                  }
                  alt={footerLogoList.logoAltText}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div className="footer-info">
                  {footerQuickLinks.map(function(hd, i) {
                    hd = JSON.parse(hd);
                    return (
                      <div key={i} className="">
                        <a href="">
                          <h3 className="">{hd.linkTitle}</h3>
                        </a>
                        <p>{hd.linkDescription}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="hidden-xs col-xs-12 col-sm-8 col-md-8 footer-info-links">
                <div className="footer-info-list">
                  {footerList1.map(function(hd, i) {
                    hd = JSON.parse(hd);
                    return (
                      <div className="col-xs-3 col-md-3 footer-links" key={i}>
                        <ul className="footer-links-list">
                          {hd.subList.map(function(hd, i) {
                            return (
                              <li key={i}>
                                <a href={hd.url}>{hd.text}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 footer-content nav-folderized footer-icons">
              <div className="col-sm-4 col-md-4">
                {appList.map(function(hd, i) {
                  hd = JSON.parse(hd);
                  if (i % 2 === 0) {
                    return (
                      <div className="even-icons" key={i}>
                        <img src={Constants.AEM_URL + hd.imagePath} />
                        <span>{hd.text}</span>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="col-sm-8 col-md-8">
                {appList.map(function(hd, i) {
                  hd = JSON.parse(hd);
                  if (i % 2 !== 0) {
                    return (
                      <div className="odd-icons" key={i}>
                        <img src={Constants.AEM_URL + hd.imagePath} />
                        <span>{hd.text}</span>
                      </div>
                    );
                  }
                })}
              </div>
              <div className="hidden-sm hidden-md hidden-lg col-xs-12 col-sm-8 col-md-8 footer-info-links">
                <div className="footer-info-list">
                  {footerList1.map(function(hd, i) {
                    hd = JSON.parse(hd);
                    return (
                      <div className="col-xs-4 col-md-3 footer-links" key={i}>
                        <ul className="footer-links-list">
                          {hd.subList.map(function(hd, i) {
                            return (
                              <li key={i}>
                                <a href={hd.url}>{hd.text}</a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
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

export default connect(mapStateToProps)(Footer);
