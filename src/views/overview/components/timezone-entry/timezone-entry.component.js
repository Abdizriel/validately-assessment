import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './timezone-entry.scss';

const INITIAL_STATE = {
    timestamp: undefined,
};

class TimezoneEntry extends Component {
    static propTypes = {
        timezoneActions: PropTypes.object.isRequired,
        timezone: PropTypes.object.isRequired,
        name: PropTypes.string.isRequired,
        deletable: PropTypes.bool,
        editable: PropTypes.bool,
        active: PropTypes.bool,
    };

    static defaultProps = {
        deletable: false,
        editable: true,
        active: false,
    };

    state = INITIAL_STATE;

    componentDidMount = () => {
        this.setState({ timestamp: this.props.timezone.selected.timestamp });
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({ timestamp: nextProps.timezone.selected.timestamp });
    }

    onRemove = () => {
        this.props.timezoneActions.removeTimezone(this.props.name);
    }

    onEdit = () => {
        this.props.timezoneActions.editTimezone(this.props.name);
    }

    onCancel = () => {
        this.props.timezoneActions.editTimezone(undefined);
        this.setState(INITIAL_STATE);
    }

    onSubmit = () => {
        const timestamp = this.state.timestamp;
        this.setState(INITIAL_STATE, () => {
            this.props.timezoneActions.updateTimezone(this.props.name, timestamp);
        });
    }

    onDateChange = (date) => {
        this.setState({ timestamp: moment(date).valueOf() });
    }

    _renderRead = () => {
        const { name, deletable, editable, active } = this.props;
        const { timezone: { selected: { timestamp }, editing } } = this.props;
        const isEdited = editing ===  name;
        return (
            <div className={`
                timezone-entry
                ${active ? 'timezone-entry--active' : ''}
                ${isEdited ? 'timezone-entry--edit' : ''}
            `}>
                <div className="timezone-entry__timezone">{name}</div>
                <div className={`
                    timezone-entry__date
                    ${isEdited ? 'force-hidden' : ''}
                `}>
                    {moment.tz(timestamp, name).format('dddd, MMMM Do YYYY')
                }</div>
                <div className={`
                    timezone-entry__time
                    ${isEdited ? 'force-hidden' : ''}
                `}>
                    {moment.tz(timestamp, name).format('HH:mm')}
                </div>
                <div className={`
                    timezone-entry__edit
                    ${isEdited ? '' : 'force-hidden'}
                `}>
                    <DatePicker
                        selected={moment.tz(this.state.timestamp, name)}
                        onChange={this.onDateChange}
                        className="timezone-entry__edit-datepicker"
                        showTimeSelect
                        dateFormat="LLL"
                    />
                    <span className="timezone-entry__edit-helper">Click date to edit</span>
                </div>
                <div className="timezone-entry__actions">
                    <span
                        className={`
                            timezone-entry__action timezone-entry__action--edit
                            ${!editable ? 'hidden' : ''}
                            ${isEdited ? 'force-hidden' : ''}
                        `}
                        onClick={() => this.onEdit()}
                    >
                        <i className="fas fa-edit" />
                    </span>
                    <span
                        className={`
                            timezone-entry__action timezone-entry__action--remove
                            ${!deletable ? 'hidden' : ''}
                            ${isEdited ? 'force-hidden' : ''}
                        `}
                        onClick={() => this.onRemove()}
                    >
                        <i className="fas fa-trash-alt" />
                    </span>
                    <span
                        className={`
                            timezone-entry__action timezone-entry__action--cancel
                            ${isEdited ? '' : 'force-hidden'}
                        `}
                        onClick={() => this.onCancel()}
                    >
                        <i className="fas fa-times-circle" />
                    </span>
                    <span
                        className={`
                            timezone-entry__action timezone-entry__action--submit
                            ${isEdited ? '' : 'force-hidden'}
                        `}
                        onClick={() => this.onSubmit()}
                    >
                        <i className="fas fa-check-circle" />
                    </span>
                </div>
            </div>
        );
    }

    render() {
        return this._renderRead();
    }
}

export default TimezoneEntry;