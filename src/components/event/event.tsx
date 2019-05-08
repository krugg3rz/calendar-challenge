import * as React from "react";
import { ICalendarEvents } from "../../reducers/calendarReducer";
import styles from "./event.module.scss";

export interface IProps {
  event: ICalendarEvents;
}

export interface IState {}

class Event extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section>
        <article className={styles.eventCard}>
          <h1>{this.props.event.organizer.displayName}</h1>
          <h2>{this.props.event.summary}</h2>
          <h3>{this.props.event.start.date}</h3>
          <h3>{this.props.event.end.date}</h3>
        </article>
      </section>
    );
  }
}

export default Event;
