import React from "react";
import { connect } from "react-redux";
import "./index.scss";

class AdaptiveHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    openHamBurgerMenu() {
        console.log('hamburger clicked!');
        // document.getElementById("menuLeft").style.display = "block";
        // document.getElementById("menuLeft").style.width = "calc(100vw - 33%)";
        // document.body.style.overflow = "hidden";
    }

    render() {
        return (
            <div className="adaptive-header-container">
                <div className="header-container hannford">
                    <div className="container-fluid pl-0 pr-0">
                        <nav className="navbar navbar-default">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle link collapsed pull-left"
                                        onClick={this.openHamBurgerMenu} aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                    <div className="logo-container">
                                        <div className="logo">
                                            <a href={this.props.header.logoLink}  title="" className="link">
                                                <img src={this.props.header.logo} className="link" />
                                            </a>
                                        </div>
                                    </div>
                                    <button type="button" className="navbar-toggle navbar-scanner pull-right">
                                        <div className="scanner-icon"></div>
                                    </button>
                                </div>
                                <div className="user-address">Hi, Alex</div>
                                <div className="store-details">
                                    <span className="store-title">Your store:&nbsp;</span>
                                    <span className="store-name">Rancho Santa Margarita</span>
                                </div>
                                <div>
                                    <form className="show-search">
                                        <div className="search-box-wrapper">
                                            <img src={this.props.header.searchLogo} className="search-icon" />
                                            <input type="text" className="form-control search-box"
                                                placeholder={this.props.header.searchEmptyText} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="nav-sub-tab">
                                <div className="for-you active">For You</div>
                                <div className="departments">Departments</div>
                            </div>
                            <div className="sticky-navigation">
                                <div>
                                    <div className="footer-nav-icons footer-nav-shop"></div>
                                    <div className="footer-nav-item-desc">Shop</div>
                                </div>
                                <div>
                                    <div className="footer-nav-icons footer-nav-outfits"></div>
                                    <div className="footer-nav-item-desc">Outfits</div>
                                </div>
                                <div>
                                    <div className="footer-nav-icons footer-nav-wallet"></div>
                                    <div className="footer-nav-item-desc">Wallet</div>
                                </div>
                                <div>
                                    <div className="footer-nav-icons footer-nav-cart"></div>
                                    <div className="footer-nav-item-desc">Cart</div>
                                </div>
                                <div>
                                    <div className="footer-nav-icons footer-nav-account"></div>
                                    <div className="footer-nav-item-desc">Account</div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            
        );
    }
}


const mapStateToProps = state => ({
    header: state.body.body.header
  });
  
  export default connect(mapStateToProps)(AdaptiveHeader);