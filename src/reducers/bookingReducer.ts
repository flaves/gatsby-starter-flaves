import {
  BookingActionTypes,
  BookingState,
  SET_CATEGORY,
  SET_CARE,
} from '../store/booking/types';

const initialState: BookingState = {
  category: ``,
  care: ``,
};

const bookingReducer = (
  state = initialState,
  action: BookingActionTypes
): BookingState => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
    case SET_CARE:
      return {
        ...state,
        care: action.care,
      };
    default:
      return state;
  }
};

export default bookingReducer;
