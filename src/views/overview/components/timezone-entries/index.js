import { connect }              from 'react-redux';

import TimezoneEntries from './timezone-entries.component';

const mapStateToProps = ({ timezone }) => {
    return {
        timezone,
    };
};

export default connect(
    mapStateToProps,
    null
)(TimezoneEntries);