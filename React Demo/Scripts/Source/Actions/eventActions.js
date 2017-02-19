const toggleEvent = function(id) {
    return {
        type: "TOGGLE",
        payload: {
            Id: id
        }
    };
};

const addEvent = function(event) {
    return {
        type: "ADD",
        payload: event
    };
};

const removeParticipant = function(eventId, participantId) {
    return {
        type: "REMOVE_PARTICIPANT",
        payload: {
            EventId: eventId,
            ParticipantId: participantId
        }
    };
};

const toggleParticipantFlag = function(eventId, participantId) {
    return {
        type: "TOGGLE_PARTICIPANT_FLAG",
        payload: {
            EventId: eventId,
            ParticipantId: participantId
        }
    };
};



export {
    toggleEvent,
    addEvent,
    removeParticipant,
    toggleParticipantFlag
};