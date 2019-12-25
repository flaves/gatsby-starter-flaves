import { combineReducers } from 'redux';

import eventReducer from './eventReducer';

export const rootReducer = combineReducers({
  event: eventReducer,
});

export type State = ReturnType<typeof rootReducer>;
