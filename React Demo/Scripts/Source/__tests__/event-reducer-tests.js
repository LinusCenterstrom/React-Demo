import EventReducer from "../event-reducer.js";
import {removeParticipant, toggleParticipantFlag} from "../Actions/eventActions.js";

describe("EventReducer", () => {
    it("should add an event", () => {
        expect(EventReducer(undefined,
        {
            type: "ADD",
            payload: {
                Id: 1,
                Name: "Test",
                Open: false
            }
        }).events).toEqual(
            {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false
                }
            }
        );
    });
});

describe("EventReducer", () => {
    it("should toggle an event", () => {
        var state = EventReducer(undefined,
        {
            type: "ADD",
            payload: {
                Id: 1,
                Name: "Test",
                Open: false
            }
        });

        expect(state).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false
                }
            },
            loading: false
        });

        state = EventReducer(state,
        {
            type: "TOGGLE",
            payload: {
                Id: 1
            }
        });

        expect(state.events).toEqual(
            {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: true
                }
            }
        );

        expect(EventReducer(state,
        {
            type: "TOGGLE",
            payload: {
                Id: 1
            }
        }).events).toEqual(
            {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false
                }
            }
        );
    });
});

describe("EventReducer", () => {
    it("should remove participant", () => {
        var state = EventReducer(undefined,
        {
            type: "ADD",
            payload: {
                Id: 1,
                Name: "Test",
                Open: false,
                Participants: {
                    "1" : {
                        Id: 1,
                        Name: "Linus"
                    }
                }
            }
        });

        expect(state).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {
                        "1": {
                            Id: 1,
                            Name: "Linus"
                        }
                    }
                }
            },
            loading: false
        });

        state = EventReducer(state, removeParticipant(1, 1));

        expect(state).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {}
                }
            },
            loading: false
        });
    });
});

describe("EventReducer", () => {
    it("should toggle flag", () => {
        var state = EventReducer(undefined,
        {
            type: "ADD",
            payload: {
                Id: 1,
                Name: "Test",
                Open: false,
                Participants: {
                    "3" : {
                        Id: 3,
                        Name: "Linus"
                    }
                }
            }
        });

        expect(state).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {
                        "3": {
                            Id: 3,
                            Name: "Linus"
                        }
                    }
                }
            },
            loading: false
        });

        state = EventReducer(state, toggleParticipantFlag(1, 3));

        expect(state).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {
                        "3": {
                            Id: 3,
                            Name: "Linus",
                            Flagged: true
                        }
                    }
                }
            },
            loading: false
        });

        state = {
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {
                        "3": {
                            Id: 3,
                            Name: "Linus",
                            Flagged: true
                        }
                    }
                }
            },
            loading: false
        };
        expect(EventReducer(state, toggleParticipantFlag(1, 3))).toEqual({
            events: {
                "1": {
                    Id: 1,
                    Name: "Test",
                    Open: false,
                    Participants: {
                        "3": {
                            Id: 3,
                            Name: "Linus",
                            Flagged: false
                        }
                    }
                }
            },
            loading: false
        });
    });
});

