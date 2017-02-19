﻿import React from "react";
import {connect} from "react-redux";
import {toggleEvent} from "../Actions/eventActions.js";
import Participant from "./Participant.jsx";
import {getEventValue} from "../EventHelper.js";

@connect()
export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = function() {
            const { dispatch } = this.props;
            const { Id } = this.props.ev;
            dispatch(toggleEvent(Id));
        }.bind(this);
    }
    render() {
        const { Id, Name, Price, Open, Participants } = this.props.ev;
        
        const participants = Object.keys(Participants).map(participantId => {
            return <Participant key={participantId} participant={Participants[participantId]}></Participant>;
        });

        const numParticipants = Object.keys(Participants).length;

        const { Cost, Income } = getEventValue(this.props.ev);

        let cost = Cost + " kr";
        let income = Income + " kr";
        let sum = (Income - Cost) + " kr";

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {Name}
                </div>
                <div className="panel-body">
                    <div>
                    Tillfällesnr: {Id}
                    <img src={"https://www.legaonline.se/legaonline/images/small/user1.png"} alt="Antalet deltagare som uppfyller sökkriterierna" />{numParticipants}
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