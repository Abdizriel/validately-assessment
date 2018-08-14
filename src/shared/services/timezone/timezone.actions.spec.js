
import moment from 'moment-timezone';

import * as ActionTypes from './timezone.types';
import * as ActionCreators from './timezone.actions';

describe('timezone.actions', () => {
    const timezone = 'Africa/Bangui';

    it('should create an action to get initial timezones', () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.GET_INITIAL_TIMEZONES,
            payload: getInitialTimezonesMock(),
        };

        expect(typeof (ActionCreators.getInitialTimezones())).toEqual('function');
        ActionCreators.getInitialTimezones()(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });

    it('should create an action to remove timezone', () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.REMOVE_TIMEZONE,
            payload: { timezone },
        };

        expect(typeof (ActionCreators.removeTimezone(timezone))).toEqual('function');
        ActionCreators.removeTimezone(timezone)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });

    it('should create an action to add timezone', () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.ADD_TIMEZONE,
            payload: {
                name: timezone,
                deletable: true,
                editable: true,
            },
        };

        expect(typeof (ActionCreators.addTimezone(timezone))).toEqual('function');
        ActionCreators.addTimezone(timezone)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });

    it('should create an action to update timezones', () => {
        const timestamp = moment().valueOf();
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.UPDATE_TIMEZONE,
            payload: {
                name: timezone,
                timestamp: expect.any(Number)
            },
        };

        expect(typeof (ActionCreators.updateTimezone(timezone, timestamp))).toEqual('function');
        ActionCreators.updateTimezone(timezone, timestamp)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
    });

    it('should create an action to edit timezone', () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.EDIT_TIMEZONE,
            payload: timezone,
        };

        expect(typeof (ActionCreators.editTimezone(timezone))).toEqual('function');
        ActionCreators.editTimezone(timezone)(dispatch);
        expect(dispatch).toBeCalledWith(expected);
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