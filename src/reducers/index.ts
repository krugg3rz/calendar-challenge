import { combineReducers } from "redux";
import calendarReducer, { ICalendarState } from "./calendarReducer";

export interface IStore {
  calendar: ICalendarState;
}

export default combineReducers({
  calendar: calendarReducer
});
