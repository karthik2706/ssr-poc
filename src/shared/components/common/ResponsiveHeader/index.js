import React from "react";
import { connect } from "react-redux";
import "./index.scss";

class ResponsiveHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    openHamBurgerMenu() {
        document.getElementById("menuLeft").style.display = "block";
        document.getElementById("menuLeft").style.width = "calc(100vw - 33%)";
        document.body.style.overflow = "hidden";
    }

    headerItemList() {
        const headerMenu = this.props.header;
        const navLinks = headerMenu.navigationLinks;
        let htmlData = [];
        navLinks.map((item, index) => {
            let childHtmlData = '';
            if (item.childLinks.length > 0) {
                childHtmlData = <ul className="dropdown-menu dropdown-menu-large row">{this.generateChildHtml(item.childLinks)}</ul>;
            }
            htmlData.push(<li className="dropdown-large"><a href="#" className="link dropdown-toggle" data-toggle="dropdown">{item.title}</a>{childHtmlData}</li>);
        });
        return htmlData;
    }

    generateChildHtml(childElements) {
        let childElemHtml = [];
        let count = 0;
        let finalHtml = [];
        childElements.map((item, index) => {
            let childHtmlData;
            if (item.childLinks.length > 0) {
                childHtmlData = this.generateSecondLevelChilds(item.childLinks);
            }
            childElemHtml.push(<span><li className="dropdown-header">{item.title}</li>{childHtmlData}</span>); 
            count = count + 1;
            if (count % 2 == 0) {
                finalHtml.push(<li><ul className="megamenu-dropdown">{childElemHtml}</ul></li>);
                childElemHtml = [];
            }
        });

        if (count % 2 != 0) {
            finalHtml.push(<li><ul className="megamenu-dropdown">{childElemHtml}</ul></li>);
            childElemHtml = [];
        }
        return finalHtml;
    }

    generateSecondLevelChilds(secondLevelChilds) {
        let childElem = [];
        secondLevelChilds.map((item, index) => {
            childElem.push(<li><a href="#">{item.title}</a></li>);
        });
        return childElem;
    }

    render() {
        return (
            <div className="header-container hannford">
                <div className="container-fluid pl-0 pr-0">
                    <nav className="navbar navbar-default">
                        <div className="container flex-desktop flex-desktop-space-between flex-mobile">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle link collapsed pull-left"
                                    onClick={this.openHamBurgerMenu} aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <div className="logo-container">
                                    {/* //flex-mobile */}
                                    <div className="logo ">
                                        <a href={this.props.header.logoLink}  title="" className="link">
                                            <img src={this.props.header.logo} className="link" />
                                        </a>
                                    </div>
                                </div>
                                <div className="mobile-actions">
                                    <a href={this.props.header.accountLink} className="icon-alignment">
                                        <img src={this.props.header.searchLogo} />
                                    </a>
                                    <a href={this.props.header.cartLink} className="icon-alignment">
                                        <img src={this.props.header.cartImage} />

                                    </a>
                                </div>
                            </div>
                            <div className="collapse navbar-collapse flex-desktop flex-desktop-flex-start menuLeft" id="menuLeft">
                                <ul className="nav navbar-nav flex-desktop flex-desktop-align-center">
                                    { this.headerItemList() }
                                </ul>
                                <div className="cancel hidden-sm hidden-md hidden-lg">
                                    <span>
                                        <img src="../../../../assets/images/cancel.png" className="link" />
                                    </span>
                                </div>
                                <div className="right-section flex-desktop flex-desktop-flex-end ">
                                    <ul
                                        className="nav navbar-nav list-images hidden-xs desktop-no-margin flex-desktop flex-desktop-align-center flex-desktop-flex-end ">
                                        <li>
                                            <a href={this.props.header.accountLink} className="icon-alignment search-mini">
                                                <img src={this.props.header.searchLogo} />
                                                <span className="icon-text-alignment"> Search </span>
                                            </a>
                                            <span className="search-container">
                                                <form className="show-search">
                                                    <div className="search-box-wrapper">
                                                        <img src={this.props.header.searchLogo} className="search-icon" />
                                                        <input type="text" className="form-control search-box"
                                                            placeholder={this.props.header.searchEmptyText} />
                                                    </div>
                                                </form>
                                            </span>
                                        </li>

                                        <li>
                                            <a href={this.props.header.couponLink} className="icon-alignment">
                                                <span className="coupon"> $ </span>
                                                <span className="icon-text-alignment"> Coupons </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.props.header.accountLink} className="icon-alignment">
                                                <img src={this.props.header.accountImage} />
                                                <span className="icon-text-alignment"> Account </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={this.props.header.cartLink} className="icon-alignment">
                                                <img src={this.props.header.cartImage} />
                                                <span className="badge badge-color">5</span>
                                                <span className="icon-text-alignment icon-text-alignment-last"> $87.99 </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    header: state.body.body.header
  });
  
  export default connect(mapStateToProps)(ResponsiveHeader);