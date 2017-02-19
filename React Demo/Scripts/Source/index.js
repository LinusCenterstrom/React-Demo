import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./hello-world.jsx";
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import EventReducer from "./event-reducer.js";
const EventStore = createStore(EventReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render
    (<Provider store={EventStore}>
        <HelloWorld></HelloWorld>
    </Provider>,
    document.getElementById("root"));

