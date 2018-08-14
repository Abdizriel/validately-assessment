import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import Overview from './overview.component';
import * as timezoneActions from '../../shared/services/timezone/timezone.actions';

const mapDispatchToProps = (dispatch) => {
    return {
        timezoneActions: bindActionCreators(timezoneActions, dispatch),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Overview);