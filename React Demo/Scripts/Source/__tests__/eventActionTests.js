import {toggleEvent, addEvent, removeParticipant, toggleParticipantFlag} from "../Actions/eventActions.js";

describe("toggleEvent", () => {
    it("should create action", () => {
        expect(toggleEvent(1)).toEqual({
            type: "TOGGLE",
            payload: {
                Id: 1
            }
        });
    });
});

describe("addEvent", () => {
    it("should create action", () => {
        expect(addEvent({
            Id: 1,
            Name: "Test"
        })).toEqual({
            type: "ADD",
            payload: {
                Id: 1,
                Name: "Test"
            }
        });
    });
});

describe("removeParticipant", () => {
    it("should create action", () => {
        expect(removeParticipant(1, 3)).toEqual({
            type: "REMOVE_PARTICIPANT",
            payload: {
                EventId: 1,
                ParticipantId: 3
            }
        });
    });
});

describe("toggleParticipantFlag", () => {
    it("should create action", () => {
        expect(toggleParticipantFlag(1, 3)).toEqual({
            type: "TOGGLE_PARTICIPANT_FLAG",
            payload: {
                EventId: 1,
                ParticipantId: 3
            }
        });
    });
});