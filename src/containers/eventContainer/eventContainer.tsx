import * as React from "react";
import Event from "../../components/event/event";
import { ICalendarEvents, fetchCalendar } from "../../reducers/calendarReducer";
import { IStore } from "../../reducers";
import { connect } from "react-redux";
import styles from "./eventContainer.module.scss";

export interface IOwnProps {
  // event: ICalendarEvents;
}

export interface IStateProps {
  calendarEvents: ICalendarEvents[];
  fetchCalendar: () => void;
}

export interface IState {}

class EventContainer extends React.Component<IOwnProps & IStateProps, IState> {
  // state = { :  }

  public componentDidMount() {
    this.props.fetchCalendar();
  }

  public render() {
    return (
      <div className={styles.eventContainer}>
        {this.props.calendarEvents.map((event, index) => (
          <Event event={event} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IOwnProps) => {
  return {
    calendarEvents: state.calendar.calendarEvents
  };
};

const mapDispatchToProps = { fetchCalendar };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventContainer);
