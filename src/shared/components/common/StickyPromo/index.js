// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from "classnames";
import MiniPromo from './miniPromo';
import Promo from './promo';

import './index.scss';
/**
 * StickyPromotion component
 */
class StickyPromotion extends React.Component {
    /**
     * @param {*} props super props
     * @returns {void}
     */
    constructor(props) {
        super(props);
        this.state = {
            showPromotions: false
        };
    }

    togglePromotions = () => {
        this.setState({
            showPromotions: !this.state.showPromotions
        })
    }

    /**
     * Render Component.
     * @returns {object} html instance
     */
    render() {
        const { slideConfig } = this.props;

        return (
            <div className={
                classNames('sticky-promotions',
                    {
                        active: this.state.showPromotions
                    })
            }>
                <div className="container">
                    {
                        this.state.showPromotions &&
                        <Promo />
                    }
                    {
                        !this.state.showPromotions &&
                        <MiniPromo config={slideConfig}/>
                    }
                </div>
                <button className="toggle-btn" onClick={this.togglePromotions}>
                    <span>+</span>
                </button>
            </div>
        );
    }
}

StickyPromotion.propTypes = {
    slideConfig: PropTypes.array.isRequired
};

StickyPromotion.defaultProps = {
};

const mapStateToProps = (state) => {
    return {
        slideConfig: state.body.body.promotions
    };
};

export default connect(mapStateToProps)(StickyPromotion);
