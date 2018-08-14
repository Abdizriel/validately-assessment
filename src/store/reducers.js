import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import timezone from '../shared/services/timezone/timezone.reducer';

const rootReducer = combineReducers({
  routing,
  timezone,
});

export default rootReducer;
