import React from "react";
import {connect} from "react-redux";
import {getEventSummary} from "../EventHelper.js";

const InfoGroup = ({ header, rows }) => {
    return (<table style={{width: "100%"}}>
                <tbody>
                {header && (
                    <tr><td colSpan="2"><b>{header}</b></td></tr>)}
                    {rows.map(row => {
                        return (<tr key={row.id}><td>{row.label}</td><td style={{"textAlign": "right"}}>{row.value}</td></tr>);
                    })}
                </tbody>
            </table>);
    }
class EventSummary extends React.Component {
    render() {
        let numParticipants = 0;
        let income = 0;
        let cost = 0;

        const events = this.props.events;
        const numEvents = Object.keys(events).length;
        
        for (let id in events) {
            if (events.hasOwnProperty(id)) {
                const { Income, Cost, ParticipantCount } = getEventSummary(events[id]);
                income += Income;
                cost += Cost;
                numParticipants += ParticipantCount;
            }
        }

        const sum = (income - cost) + " kr";
        income += " kr";
        cost += " kr";

        return (<div className="eventSummary panel panel-info">
                <div className="panel-body">
                    <hr />
                    <InfoGroup rows={[
                               {
                               id: 1,
                               label: "Antal deltagare" ,
                               value: numParticipants
                               },
                               {
                               id: 2,
                               label: "Antal tillfällen" ,
                               value: numEvents
                               }]}></InfoGroup>
                    <hr />
                    <InfoGroup header="Summering:" rows={[
                               {
                               id: 1,
                               label: "Intäkter:" ,
                               value: income
                               },
                               {
                               id: 2,
                               label: "Kostnader:" ,
                               value: cost
                               },
                               {
                               id: 3,
                               label: "Summa:" ,
                               value: sum
                               }]}></InfoGroup>
                </div>
        </div>);
    }  
};

export default EventSummary = connect((store) => {
    return {
        events: store.events
    };
})(EventSummary);