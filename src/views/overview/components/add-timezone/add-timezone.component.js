import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import moment from 'moment-timezone';

import './add-timezone.scss';

const INITIAL_STATE = {
    selected: null,
    options: [],
    loading: true,
    popupOpen: false,
}

class AddTimezone extends Component {
    static propTypes = {
        timezoneActions: PropTypes.object.isRequired,
        timezone: PropTypes.object.isRequired,
    };

    state = INITIAL_STATE;

    changePopoupState = () => {
        this.setState({ popupOpen: !this.state.popupOpen, loading: true, selected: null}, () => {
            if(this.state.popupOpen) this.setState({
                options: this._getOptions(),
                loading: false,
            });
        });
    }

    onSubmit = () => {
        this.props.timezoneActions.addTimezone(this.state.selected.value);
        this.setState({ selected: null, popupOpen: false });
        window.scrollTo(0, document.body.scrollHeight);
    }

    onSelectChange = selected => {
        this.setState({ selected });
    }

    _getOptions = () => {
        return moment.tz.names()
            .filter(timezone => {
              return !this.props.timezone.timezones.length || !this.props.timezone.timezones.filter(entry => entry.name === timezone).length;
            })
            .map(timezone => ({
                value: timezone,
                label: timezone,
            }));
    }

    render() {
        return (
            <div>
                <div className={`
                    popup
                    ${this.state.popupOpen ? '' : 'force-hidden'}
                `}>
                    <Select
                        options={this.state.options}
                        isLoading={this.state.loading}
                        isClearable={true}
                        isSearchable={true}
                        onChange={this.onSelectChange}
                        value={this.state.selected}
                        menuPlacement="top"
                        placeholder="Please select timezone to add"
                    />
                    <button className="button button__submit" onClick={() => this.onSubmit()}>
                        <span className="button__text">Add Timezone</span>
                    </button>
                </div>
                <button
                    className={`
                        button button__popup
                        ${this.state.popupOpen ? 'button__popup--close' : ''}
                    `}
                    onClick={() => this.changePopoupState()}
                >
                    <i className={`
                        fas fa-plus fa-2x
                        ${this.state.popupOpen ? 'force-hidden' : ''}
                    `}/>
                    <i className={`
                        fas fa-times fa-2x
                        ${this.state.popupOpen ? '' : 'force-hidden'}
                    `}/>
                </button>
            </div>
        );
    }
}

export default AddTimezone;