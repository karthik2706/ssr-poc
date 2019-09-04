// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './index.scss';
/**
 * MiniPromo component
 */
class MiniPromo extends React.Component {
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
        const { config, currentPromo } = this.props;
        const [ details ] = config.filter((promo) => promo.id === currentPromo);

        return (
            <div className="mini-promo">
                {
                    details &&
                    <a href={details.ctaLink}>
                        {details.ctaText}
                    </a>
                }
            </div>
        );
    }
}

MiniPromo.propTypes = {
    config: PropTypes.array,
    currentPromo: PropTypes.string
};

MiniPromo.defaultProps = {
};

const mapStateToProps = (state) => {
    return {
        config: state.promotions.promotions,
        currentPromo: state.promotions.currentPromotion
    };
};

export default connect(mapStateToProps)(MiniPromo);
