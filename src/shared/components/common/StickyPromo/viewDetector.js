// Packages
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Waypoint } from 'react-waypoint';
import { outOfSection, insideSection } from '../../../reducers/promotions';

import './index.scss';

/**
 * PromoDetector component
 */
class PromoDetector extends React.Component {
    /**
     * @param {*} props super props
     * @returns {void}
     */
    constructor(props) {
        super(props);
        this.state = {
            promoAvailable: false
        };
    }

    /**
     * @description lifecycle hook
     * @returns {void}
     */
    componentDidMount = () => {
        const { config, id } = this.props;

        const [ promo ] = config.filter((eachPromo) => eachPromo.id === id);

        if (promo) {
            this.setState({
                promoAvailable: true
            });
        }
    };

    /**
     * Render Component.
     * @returns {object} html instance
     */
    render() {
        const { id, dispatch } = this.props;

        return (
            <Waypoint
                onEnter={(event) => dispatch(insideSection({ ...event, id }))}
                onLeave={(event) => dispatch(outOfSection({ ...event, id }))}
            />
        );
    }
}

PromoDetector.propTypes = {
    dispatch: PropTypes.func.isRequired,
    config: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
};

PromoDetector.defaultProps = {
    config: []
};

const mapStateToProps = (state) => {
    return {
        config: state.promotions.promotions
    };
};

export default connect(mapStateToProps)(PromoDetector);
