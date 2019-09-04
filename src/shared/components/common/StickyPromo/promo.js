// Packages
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';
/**
 * Promo component
 */
class Promo extends React.Component {
    /**
     * @param {*} props super props
     * @returns {void}
     */
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    /**
     * Render Component.
     * @returns {object} html instance
     */
    render() {
        const { config, viewAllCtaLink, viewAllCta } = this.props;

        return (
            <Fragment>
                <div className="promo-container row">
                    {
                        config.map((singlePromo, index) => {
                            return (
                                <div className="col-md-4" key={index.toString()}>
                                    <div className={`promo ${singlePromo.promotionType}`}>
                                        <img className="add-icon" src="../../../../assets/images/plus-in-circle.png"/>
                                        <div className="row">
                                            <div className="col-md-7">
                                                {
                                                    singlePromo.relationHeading &&
                                                    <span className="extra-heading">
                                                        {singlePromo.relationHeading}
                                                    </span>
                                                }
                                                <div className="heading">
                                                    {singlePromo.promotionText}
                                                </div>
                                                <div
                                                    className="description"
                                                    dangerouslySetInnerHTML={{ __html: singlePromo.promotionDescription }}
                                                />
                                            </div>
                                            <div className="col-md-5">
                                                {
                                                    singlePromo.promotionImage &&
                                                    <img src={singlePromo.promotionImage} className="promoImage" />
                                                }
                                                {
                                                    singlePromo.ctaLink &&
                                                    <a href={singlePromo.ctaLink} className="btn apply">
                                                        {singlePromo.ctaText}
                                                    </a>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="all-coupons">
                    <a href={viewAllCtaLink}>
                        {viewAllCta}
                    </a>
                </div>
            </Fragment>
        );
    }
}

Promo.propTypes = {
    config: PropTypes.array,
    viewAllCta: PropTypes.string,
    viewAllCtaLink: PropTypes.string
};

Promo.defaultProps = {
};

const mapStateToProps = (state) => {
    const { viewAllCta, viewAllCtaLink } = state.promotions;

    return {
        config: state.body.body.promotions.configItems,
        viewAllCta: state.body.body.promotions.viewAllCta,
        viewAllCtaLink: state.body.body.promotions.viewAllCtaLink
    };
};

export default connect(mapStateToProps)(Promo);
