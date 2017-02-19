import React from "react";
import {removeParticipant, toggleParticipantFlag} from "../Actions/eventActions.js";
import {connect} from "react-redux";

@connect()
export default class Participant extends React.Component {
    constructor(props) {
        super(props);

        this.dispatch = function(action) {
            const { dispatch } = this.props;
            const { EventId, ParticipantId } = this.props.participant;
            dispatch(action(EventId, ParticipantId));
        }.bind(this);

        this.handleDelete = function() {
            this.dispatch(removeParticipant);
        }.bind(this);
        this.handleFlag = function() {
            this.dispatch(toggleParticipantFlag);
        }.bind(this);
    }
    render() {
        const {Name, Customer, Phone, Created, PaymentMethod, LimDiscount, Flagged} = this.props.participant;
        const flagImage = Flagged ? "https://www.legaonline.se/legaonline/buttons/16/flag_red.png"
                              : "https://www.legaonline.se/legaonline/buttons/16/flag_gray.png";
        return (
                <tr>
                    <td>{Name}</td>
                    <td>{Customer}</td>
                    <td>{Phone}</td>
                    <td>{Created}</td>
                    <td>{PaymentMethod}</td>
                    <td></td>
                    <td>{LimDiscount}</td>
                    <td></td>
                    <td></td>
                    <td><img onClick={this.handleFlag} src={flagImage} /></td>
                    <td><img src={"https://www.legaonline.se/legaonline/images/small/garbage.gif"}  onClick={this.handleDelete} /></td>
                </tr>
            );
    }
}