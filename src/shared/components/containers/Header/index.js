import React from 'react';
import { connect } from "react-redux";

import ResponsiveHeader from '../../common/ResponsiveHeader';
import AdaptiveHeader from '../../common/AdaptiveHeader';
import { detectDevice } from "../../../reducers/body";

class Header extends React.Component {

    componentWillMount() {
      const { dispatch } = this.props;
      dispatch(detectDevice());
    }
  
    render() {
        const { body } = this.props;
        if (this.props.isMobile) {
          return (
            <AdaptiveHeader></AdaptiveHeader>
          );
        } else {
          return (
            <ResponsiveHeader></ResponsiveHeader>
          );
        }
    }
  }

  const mapStateToProps = state => ({
    isMobile: state.body.isMobile
  });

export default connect(mapStateToProps)(Header);