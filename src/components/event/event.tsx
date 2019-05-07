import * as React from 'react';
import { ICalendarEvents } from "../../reducers/calendarReducer";

export interface IProps {
    event: ICalendarEvents;
}
 
export interface IState {
    
}
 
class Event extends React.Component<IProps, IState> {
    // state = { :  }
    render() { 
        return (  );
    }
}
 
export default Event;