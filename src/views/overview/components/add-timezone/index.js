import { connect }              from 'react-redux';
import { bindActionCreators }   from 'redux';

import AddTimezone from './add-timezone.component';
import * as timezoneActions from '../../../../shared/services/timezone/timezone.actions';

const mapStateToProps = ({ timezone }) => {
    return {
        timezone,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        timezoneActions: bindActionCreators(timezoneActions, dispatch),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTimezone);