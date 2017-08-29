import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoaderStatus } from 'containers/App/selectors';

import Loader from './loader';

class LoaderSpinner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { visible } = this.props;
    return (
      <Loader visible={visible} />
    );
  }
}

LoaderSpinner.propTypes = {
  visible: React.PropTypes.bool,
};

export function mapDispatchToProps() {
  return {
  };
}

const mapStateToProps = createStructuredSelector({
  visible: makeSelectLoaderStatus(),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoaderSpinner);
