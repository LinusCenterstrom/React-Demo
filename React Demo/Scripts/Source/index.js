import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import EventReducer from "./eventReducer.js";
import EventList from "./Components/EventList.jsx";
import {Participant} from "./Components/Participant.jsx";
import {addEvent} from "./Actions/eventActions.js";
import EventSummary from "./Components/EventSummary.jsx";

const EventStore = createStore(EventReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
(function() {
    const doSetTimeout = function(id) {
        const participantCount = (id % 3) + 1;
        let participants = {};
        for (let i = 0; i < participantCount + 1; i++) {
            var partid = id * 1000 + i;
            participants[partid] = {
                EventId: id,
                ParticipantId: partid,
                Name: `del #${partid}`,
                Customer: "Multinet",
                Phone: "123",
                Created: "2017-01-24 16:43",
                Income: id * 400,
                Cost: id * 50
            }
        }

        setTimeout(
            function() {
                EventStore.dispatch(addEvent({
                    Id: id,
                    Name: `Tillfälle #${id}`,
                    Price: 125,
                    Open: id % 2 === 0,
                    Participants: participants,
                    Income: 0,
                    Cost: 100 * id
                }));
            },
            100 * (id - 1));
    };
    for (let i = 1; i < 25; i++) {
        doSetTimeout(i);
    };
})();


ReactDOM.render
    (<Provider store={EventStore}>
        <div className="row">
            <div className="col-lg-8">
                <EventList></EventList>    
            </div>
            <div className="col-lg-4">
                <EventSummary></EventSummary>    
            </div>
        </div>
    </Provider>,
    document.getElementById("root"));

