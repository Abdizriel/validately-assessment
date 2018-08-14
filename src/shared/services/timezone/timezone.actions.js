import {
    GET_INITIAL_TIMEZONES,
    ADD_TIMEZONE,
    UPDATE_TIMEZONE,
    REMOVE_TIMEZONE,
    EDIT_TIMEZONE,
} from './timezone.types';

import moment from 'moment-timezone';

export const getInitialTimezones = () => {
    return dispatch => {
        const userZone = {
            name: moment.tz.guess(),
            deletable: false,
            editable: true,
        };
        const gmtZone = {
            name: 'Etc/Greenwich',
            deletable: false,
            editable: true,
        };
        const payload = {
            timezones: [userZone, gmtZone],
            selected: {
                name: userZone.name,
                timestamp: moment().valueOf(),
            }
        };
        dispatch({
            payload,
            type: GET_INITIAL_TIMEZONES,
        });
    };
};

export const removeTimezone = (timezone) => {
    return dispatch => {
        dispatch({
            payload: { timezone },
            type: REMOVE_TIMEZONE,
        });
    };
};

export const addTimezone = (timezone) => {
    return dispatch => {
        const payload = {
            name: timezone,
            deletable: true,
            editable: true,
        };
        dispatch({
            payload,
            type: ADD_TIMEZONE,
        });
    };
};

export const updateTimezone = (name, timestamp) => {
    return dispatch => {
        const payload = {
            name,
            timestamp,
        };
        dispatch({
            payload,
            type: UPDATE_TIMEZONE,
        });
    };
};

export const editTimezone = (name) => {
    return dispatch => {
        const payload = name;
        dispatch({
            payload,
            type: EDIT_TIMEZONE,
        });
    };
}

export default {
    getInitialTimezones,
    removeTimezone,
    addTimezone,
    updateTimezone,
    editTimezone,
}