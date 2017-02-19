import {combineReducers} from "redux";
import {removeByKey} from "./immutableHelpers.js";

const createEventMap = function(eventArr) {
    return eventArr.reduce((acc, value) => {
            acc[value.Id] = value;
        }, {});
};

const reducer = function(state = {
        events: {},
        loading: false
    }, action) {
    switch(action.type) {
        case "ADD" :
            return {
                ...state,
                events : {...state.events, [action.payload.Id]: action.payload}
            };
        case "TOGGLE":
            var ev = state.events[action.payload.Id];
            if(!ev)
                return state;
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.payload.Id]: {
                        ...state.events[action.payload.Id],
                        Open: !ev.Open
                    }
                }
            };
        case "REMOVE_PARTICIPANT":
        {
            const { EventId, ParticipantId } = action.payload;
            var ev = state.events[EventId];
            if(!ev)
                return state;

            var part = ev.Participants[ParticipantId];
            if (!part)
                return state;

            const newParticipants = removeByKey(state.events[EventId].Participants, "" + ParticipantId);
            return {
                ...state,
                events: {
                    ...state.events,
                    [EventId]: {
                        ...state.events[EventId],
                        Participants: newParticipants
                    }
                }
            }
        }
        case "TOGGLE_PARTICIPANT_FLAG":
        {
            const { EventId, ParticipantId } = action.payload;
            var ev = state.events[EventId];
            if(!ev)
                return state;

            var part = ev.Participants[ParticipantId];
            if (!part)
                return state;

            return {
                ...state,
                events: {
                    ...state.events,
                    [EventId]: {
                        ...state.events[EventId],
                        Participants: {
                            ...state.events[EventId].Participants,
                            [ParticipantId]: {
                                ...state.events[EventId].Participants[ParticipantId],
                                Flagged: !state.events[EventId].Participants[ParticipantId].Flagged
                            }
                        }
                    }
                }
            }
        }
        default :
            return state;
    }
};


//const reducers = combineReducers({ reducer });

export default reducer;
