import React from "react";
import Event from "./Event.jsx";
import {connect} from "react-redux";

class EventList extends React.Component {
    render() {
        const events = this.props.events;
        const eventList = Object.keys(events).map((key) => {
            return (<Event key={key} ev={events[key]}></Event>);
        });
        if (eventList.length === 0)
            return null;
        return <div>{eventList}</div>;
    }
}

export default EventList = connect((store) => {
    return {
        events: store.events
    };
})(EventList);