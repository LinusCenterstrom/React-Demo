import React from "react";
import {connect} from "react-redux";
import {toggleEvent} from "../Actions/eventActions.js";
import Participant from "./Participant.jsx";
import {getEventSummary} from "../EventHelper.js";

class Event extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = function() {
            const { dispatch } = this.props;
            const { Id } = this.props.ev;
            dispatch(toggleEvent(Id));
        }.bind(this);
    }
    render() {
        const { ev } = this.props;
        const { Id, Name, Price, Open, Participants } = ev;
        
        const participants = Object.keys(Participants).map(participantId => {
            return <Participant key={participantId} participant={Participants[participantId]}></Participant>;
        });

        const { Cost, Income, ParticipantCount } = getEventSummary(ev);

        const cost = Cost + " kr";
        const income = Income + " kr";
        const sum = (Income - Cost) + " kr";

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {Name}
                </div>
                <div className="panel-body">
                    <div>
                    Tillfällesnr: <b>{Id}</b>
                    <img style={{marginLeft: "20px"}} src={"https://www.legaonline.se/legaonline/images/small/user1.png"} alt="Antalet deltagare som uppfyller sökkriterierna" />{ParticipantCount}
                    </div>
                <div className="row">
                    <div className="col-lg-9">
                {Open &&
                <table style={{width: "100%"}}>
                    <thead>
                        <tr>
                        <th>
                            Deltagare
                        </th>
                        <th>
                            Kund
                        </th>
                        <th>
                            Telefon
                        </th>
                        <th>
                            Bokad
                        </th>
                        <th>
                            Bet.sätt
                        </th>
                        <th>
                            Avm.
                        </th>
                        <th>
                            Flytta
                        </th>
                        <th>
                            Klipp.
                        </th>
                        <th>
                        </th>
                        <th>
                            Flaggad
                        </th>
                        <th>
                            Ta bort
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {participants}
                    </tbody>
                </table>
                }
                </div>
                <div className="col-lg-3">
                    <table style={{width: "100%"}}>
                        <tbody>
                            <tr>
                                <td><b>Summa:</b></td><td>{sum}</td>
                            </tr>
                            <tr>
                                <td><b>Intäkter:</b></td><td>{income}</td>
                            </tr>
                            <tr>
                                <td><b>Kostnader:</b></td><td>{cost}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <div className="panel-footer" onClick={this.handleToggle}>
                <div style={{margin: "0 auto", width: "20px"}}>
                    <img src={Open ? "https://www.legaonline.se/legaonline/images/newFace/collapse_svart1.gif" : "https://www.legaonline.se/legaonline/images/newFace/expand_svart1.gif"} />
                </div>
                </div>
            </div>);
    }
};

export default Event = connect()(Event);