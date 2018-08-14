import * as ActionTypes from './timezone.types';

describe('timezone.types', () => {
    it('should have GET_INITIAL_TIMEZONES type', () => {
        const expected = 'GET_INITIAL_TIMEZONES';

        expect(typeof ActionTypes.GET_INITIAL_TIMEZONES).toEqual('string');
        expect(ActionTypes.GET_INITIAL_TIMEZONES).toEqual(expected);
    });

    it('should have ADD_TIMEZONE type', () => {
        const expected = 'ADD_TIMEZONE';

        expect(typeof ActionTypes.ADD_TIMEZONE).toEqual('string');
        expect(ActionTypes.ADD_TIMEZONE).toEqual(expected);
    });

    it('should have UPDATE_TIMEZONE type', () => {
        const expected = 'UPDATE_TIMEZONE';

        expect(typeof ActionTypes.UPDATE_TIMEZONE).toEqual('string');
        expect(ActionTypes.UPDATE_TIMEZONE).toEqual(expected);
    });

    it('should have REMOVE_TIMEZONE type', () => {
        const expected = 'REMOVE_TIMEZONE';

        expect(typeof ActionTypes.REMOVE_TIMEZONE).toEqual('string');
        expect(ActionTypes.REMOVE_TIMEZONE).toEqual(expected);
    });

    it('should have EDIT_TIMEZONE type', () => {
        const expected = 'EDIT_TIMEZONE';

        expect(typeof ActionTypes.EDIT_TIMEZONE).toEqual('string');
        expect(ActionTypes.EDIT_TIMEZONE).toEqual(expected);
    });
})