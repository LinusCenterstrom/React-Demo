import EventReducer from "../event-reducer.js";

describe("EventReducer", () => {
    it("should create a message", () => {
        const message = "Testmessage";
        expect(EventReducer(undefined,
        {
            type: "ADD",
            message: message
        }).messages).toEqual([
        {
            id: 1,
            "text": "Hello World!"
        },
        {
            id: 2,
            text: message
        }]);
    });
});
