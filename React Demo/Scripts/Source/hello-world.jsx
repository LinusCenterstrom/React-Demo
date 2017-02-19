import React from "react";
import {Provider, connect} from "react-redux";

@connect(store => {
    return{
        messages: store.messages
    }
})
export class Messenger extends React.Component {
    render() {
        const {messages, dispatch} = this.props;
        let input;

        return (<div>
    <form onSubmit={e => {
        e.preventDefault();
        if (input.value) {
            dispatch({ type: "ADD", message: input.value });
            input.value = "";
        }
    }}>
        <input ref={e => input = e} type="text"/>
        <button type="submit">Send message</button>
        </form>
            {messages.map(message => {
                return <div key={message.id}>{message.text}</div>;
            })}
        </div>);
    }
}


export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div><Messenger></Messenger></div>
            );
    }
};