import {
    GET_INITIAL_TIMEZONES,
    ADD_TIMEZONE,
    UPDATE_TIMEZONE,
    REMOVE_TIMEZONE,
    EDIT_TIMEZONE,
} from './timezone.types';

const INITIAL_STATE = {
    timezones: [],
    selected: {},
    editing: undefined,
};

export default (state = INITIAL_STATE, action = {}) => {
    switch(action.type) {
        case GET_INITIAL_TIMEZONES:
            return {
                ...state,
                ...action.payload,
            };

        case REMOVE_TIMEZONE:
            return {
                ...state,
                timezones: _removeTimezone(state.timezones, action.payload.timezone),
            };

        case UPDATE_TIMEZONE:
            return {
                ...state,
                selected: action.payload,
                editing: undefined,
            };

        case ADD_TIMEZONE:
            return {
                ...state,
                timezones: [...state.timezones, action.payload]
            };

        case EDIT_TIMEZONE:
            return {
                ...state,
                editing: action.payload
            };

        default:
            return state;
    }
}

export function _removeTimezone(timezones, timezone) {
    return timezones.filter(entry => entry.name !== timezone);
}