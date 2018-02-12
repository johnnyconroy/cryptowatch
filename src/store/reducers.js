import { combineReducers } from 'redux';
import C from '../config/constants';

export const timeline = (state = {}, action) => {
  switch (action.type) {
    case C.START_FETCH_TIMELINE_DATA:
      return {
        timelineLoading: true,
        timelineData: [],
      };
    case C.SET_TIMELINE_DATA_AFTER_FETCH:
      return {
        timelineLoading: false,
        timelineData: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  timeline,
});
