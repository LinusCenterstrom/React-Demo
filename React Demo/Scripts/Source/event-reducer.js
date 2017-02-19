import {combineReducers} from "redux";

const reducer = function(state = {
        messages: [
        {
            text: "Hello World!",
            id: 1
        }],
        nextMessageId: 2
    }, action) {
    
    switch(action.type) {
        case "ADD" :
            return {
                ...state,
                nextMessageId: state.nextMessageId + 1,
                messages: [...state.messages, {text: action.message, id: state.nextMessageId}]
            };
        default :
            return state;
    }
};


//const reducers = combineReducers({ reducer });

export default reducer;
