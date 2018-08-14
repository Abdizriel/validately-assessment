import moment from 'moment-timezone';

import * as ActionTypes from './timezone.types';
import reducer, { _removeTimezone } from './timezone.reducer';

describe('timezone.reducer', () => {
    const timezone = 'Africa/Bangui';

    const getInitialState = () => {
      return {
        timezones: [],
        selected: {},
        editing: undefined,
      };
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const state = reducer(undefined, action);
        const expected = getInitialState();

        expect(state).toEqual(expected);
    });

    it('should handle GET_INITIAL_TIMEZONES', () => {
        const action = { type: ActionTypes.GET_INITIAL_TIMEZONES, payload: getInitialTimezonesMock() };
        const state = reducer(getInitialState(), action);
        const expected = Object.assign(getInitialState(), getInitialTimezonesMock());

        expect(state).toEqual(expected);
    });

    it('should handle REMOVE_TIMEZONE', () => {
        const initialAction = { type: ActionTypes.GET_INITIAL_TIMEZONES, payload: getInitialTimezonesMock() };
        const initialState = reducer(getInitialState(), initialAction);

        const addAction = { type: ActionTypes.ADD_TIMEZONE, payload: {
            name: timezone,
            deletable: true,
            editable: true,
        }};
        const addState = reducer(initialState, addAction);

        const action = { type: ActionTypes.REMOVE_TIMEZONE, payload: { timezone } };
        const state = reducer(addState, action);
        const expected = Object.assign(addState, { timezones: _removeTimezone(addState.timezones, timezone) });

        expect(state).toEqual(expected);
    });

    it('should handle UPDATE_TIMEZONE', () => {
        const initialAction = { type: ActionTypes.GET_INITIAL_TIMEZONES, payload: getInitialTimezonesMock() };
        const initialState = reducer(getInitialState(), initialAction);

        const addAction = { type: ActionTypes.ADD_TIMEZONE, payload: {
            name: timezone,
            deletable: true,
            editable: true,
        }};
        const addState = reducer(initialState, addAction);

        const timestamp = moment().valueOf();
        const action = { type: ActionTypes.UPDATE_TIMEZONE, payload: { timestamp, name: timezone } };
        const state = reducer(addState, action);
        const expected = Object.assign(addState, { selected: action.payload, editing: undefined });

        expect(state).toEqual(expected);
    });

    it('should handle ADD_TIMEZONE', () => {
        const initialAction = { type: ActionTypes.GET_INITIAL_TIMEZONES, payload: getInitialTimezonesMock() };
        const initialState = reducer(getInitialState(), initialAction);

        const action = {
            type: ActionTypes.ADD_TIMEZONE,
            payload: {
                name: timezone,
                deletable: true,
                editable: true,
            }
        };
        const state = reducer(initialState, action);
        const expected = Object.assign(initialState, { timezones: [...initialState.timezones, action.payload] });

        expect(state).toEqual(expected);
    });

    it('should handle EDIT_TIMEZONE', () => {
        const initialAction = { type: ActionTypes.GET_INITIAL_TIMEZONES, payload: getInitialTimezonesMock() };
        const initialState = reducer(getInitialState(), initialAction);

        const action = {
            type: ActionTypes.EDIT_TIMEZONE,
            payload: timezone,
        };
        const state = reducer(initialState, action);
        const expected = Object.assign(initialState, { editing: action.payload });

        expect(state).toEqual(expected);
    });

});

function getInitialTimezonesMock () {
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
            timestamp: expect.any(Number),
        }
    };
    return payload;
}