import {removeByKey} from "../immutableHelpers.js";

describe("RemoveByKey", () => {
    it("should remove key", () => {
        expect(removeByKey({
            id: 1,
            name: "hej"
        }, "name")).toEqual({
            id: 1
        });
    });
});

describe("RemoveByKey", () => {
    it("should remove nested object", () => {
        expect(removeByKey({
            id: 1,
            name: "hej",
            data: {
                data: 1,
                participants: [],
                value: "123"
            }
        }, "data")).toEqual({
            id: 1,
            name: "hej"
        });
    });
});

describe("RemoveByKey",
    () => {
        var fullState = {
            events:{
                1: {
                    "Id": 1,
                    "Name": "Test",
                    "Open": false,
                    Participants: {
                        1: {
                            "Id": 1,
                            "Name": "Linus" 
                        },
                        2:{}
                    }
                }
            },
            "loading":false
        };

        it("should remove nested object2", () => {
            expect(removeByKey(fullState.events[1].Participants, "1")).toEqual({
                2:{}
            });
        });
    });