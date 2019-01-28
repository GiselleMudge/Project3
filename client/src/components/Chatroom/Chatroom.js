import React from "react";
import io from "socket.io-client";
import "./Chatroom.css";
import NavBar from "../NavBar";

class Chatroom extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            username: '',
            message: '',
            messages: []
        };

        const url = (process.env.NODE_ENV === 'production') ? 
        "https://ru-ok.herokuapp.com/" : 'http://localhost:3000';

        this.socket = io(url);

        this.socket.on('RECEIVE_MESSAGE', function(data){
            console.log("recieve message", data)
            addMessage(data);
        });

        const addMessage = data => {
            console.log(data);
            this.setState({messages: [...this.state.messages, data]});
            console.log(this.state.messages);
        };

        this.sendMessage = ev => {
            ev.preventDefault();
            console.log("sent message", this.state.username, this.state.message);
            this.socket.emit('SEND_MESSAGE', {
                author: this.state.username,
                message: this.state.message
            })
            this.setState({message: ''});

        }
    }

    componentDidMount(){
        console.log("....mounting chat");
        let username = localStorage.getItem("username");
        console.log("username", username);
        this.setState({"username": username});
    }
    
    render(){
        return (
            <div>
            <NavBar />
            <div className="chat-container">
                <div className="row">
                    <div className="col-4">
                        <div className="card card-chat">
                            <div className="card-body">
                                <div className="card-title">Connect with others!</div>
                                <hr/>
                                <div className="messages">
                                    {this.state.messages.map(message => {
                                        return (
                                            <div className="chat-message">{message.author}: {message.message}</div>
                                        )
                                    })}
                                </div>

                            </div>
                            <div className="card-footer">
                                <input type="text" placeholder="Username" value={this.state.username} onChange={ev => this.setState({username: ev.target.value})} className="form-control"/>
                                <br/>
                                <input type="text" placeholder="Message" className="form-control" value={this.state.message} onChange={ev => this.setState({message: ev.target.value})}/>
                                <br/>
                                <button onClick={this.sendMessage} className="btn btn-primary form-control">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Chatroom;