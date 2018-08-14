import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TimezoneEntry from '../timezone-entry';
import './timezone-entries.scss';

class TimezoneEntries extends Component {
    static propTypes = {
        timezone: PropTypes.object
    };

    _renderTimezones() {
        const { timezones, selected } = this.props.timezone;

        if(!timezones.length) return [];

        return [...timezones].map(({ name, deletable, editable }) => (
            <div key={`${name}`} className="col-md-offset-2 col-xs-12 col-sm-12 col-md-8">
                <TimezoneEntry
                    name={name}
                    deletable={deletable}
                    editable={editable}
                    active={name === selected.name}
                />
            </div>
        ));
    }

    render() {
        return (
            <div className="row timezone-entries">
                {this._renderTimezones()}
            </div>
        );
    }
}

export default TimezoneEntries;