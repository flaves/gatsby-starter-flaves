import { combineReducers } from 'redux';

import bookingReducer from './bookingReducer';
import eventReducer from './eventReducer';
import storeReducer from './storeReducer';

export const rootReducer = combineReducers({
  booking: bookingReducer,
  event: eventReducer,
  store: storeReducer,
});

export type State = ReturnType<typeof rootReducer>;
