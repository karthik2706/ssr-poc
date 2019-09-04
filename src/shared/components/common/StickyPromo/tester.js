// Packages
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PromoDetector from './viewDetector.js';

import './index.scss';
/**
 * StickyTrigger component
 */
class StickyTrigger extends React.Component {
    /**
     * Render Component.
     * @returns {object} html instance
     */
    render() {
        const { miniPromotions } = this.props;

        return (
            miniPromotions.map((promo, index) => {
                return (
                    <div className={`content-section ${promo.color}`} key={index.toString()}>
                        <PromoDetector id={promo.id}/>
                        Promotion section --> {promo.ctaText}
                    </div>
                )
            })
        )
    }
}

StickyTrigger.propTypes = {
    miniPromotions: PropTypes.array
};

StickyTrigger.defaultProps = {
};

const mapStateToProps = (state) => {
    return {
        miniPromotions: state.promotions.promotions
    };
};

export default connect(mapStateToProps)(StickyTrigger);
