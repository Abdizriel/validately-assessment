import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CoreLayout from '../../shared/containers/layout/core';
import AddTimezone from './components/add-timezone';
import TimezoneEntries from './components/timezone-entries';

class Overview extends Component {
  static propTypes = {
    timezoneActions: PropTypes.object
  };

  componentDidMount() {
    this.props.timezoneActions.getInitialTimezones();
  }

  render() {
    return (
      <CoreLayout>
        <div>
          <TimezoneEntries />
          <AddTimezone />
        </div>
      </CoreLayout>
    );
  }
}

export default Overview;