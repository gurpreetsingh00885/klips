import React, { Component } from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import renderHTML from 'react-render-html';
import Button from 'react-bootstrap/Button';
import '../styles.css'
import axios from 'axios'

class Board extends Component {
  state = {
    'index' : 0,
    'messages' : ["Text will appear here", "Text will appear here"],
    'code' : ''
  };

  //ws = new WebSocket('ws://localhost:8000/ws/');
  urlify = (text) => {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
        return '\&nbsp\;<a href="' + url + '" target=\"_blank\">' + url + '</a>\&nbsp\;';
    })
  }

  componentDidMount() {
    axios.get('/api/id/issue')
    .then((res) => {
      this.setState({'code' : res.data.id});
      var loc = window.location;
        var wsStart = 'ws://';
        if (loc.protocol == 'https://')
          wsStart = 'wss://';
        var endpoint = wsStart + loc.host + '/ws/board/' + res.data.id + '/';
      this.ws = new WebSocket(endpoint);

      this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
      }

      this.ws.onmessage = evt => {
        // on receiving a message, add it to the list of messages
        var message = JSON.parse(evt.data)['message'];
        message = this.urlify(message);
        var messages = this.state.messages;
        messages[(this.state.index + 1) % 2] = message;
        this.setState({ index: (this.state.index + 1) % 2, messages });
      }

      this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss
        var loc = window.location;
        var wsStart = 'ws://';
        if (loc.protocol == 'https://')
          wsStart = 'wss://';
        var endpoint = wsStart + loc.host + '/ws/board/' + res.data.id + '/';
        this.setState({
          ws: new WebSocket(endpoint),
        })
      }
    })
    .catch((error) => console.log(error));
  }





  render() {
    return (
      <div>
        <div className="simple-trans-main">
          <Transition
            native
            items = {this.state.index === 0}
            from = {{ opacity: 1, transform: 'translate3d(0,100%,0)' }}
            enter = {{ opacity: 1, transform: 'translate3d(0,0%,0)' }}
            leave = {{ opacity: 1, transform: 'translate3d(0,-100%,0)' }}
          >
            {
              show => show && (props => (
                <animated.div style={{...props, background: 'lightpink'}}>
                  {renderHTML(this.state.messages[0])}
                </animated.div>
              ))
            }
          
          </Transition>
          <Transition
            native
            items = {this.state.index === 1}
            from = {{ opacity: 1, transform: 'translate3d(0,100%,0)' }}
            enter = {{ opacity: 1, transform: 'translate3d(0,0%,0)' }}
            leave = {{ opacity: 1, transform: 'translate3d(0,-100%,0)' }}
          >
            {
              show => show && (props => (
                <animated.div style={{ ...props, background: 'lightblue'}}>
                  {renderHTML(this.state.messages[1])}
                </animated.div>
              ))
            }
          
          </Transition>
        </div>

        <div className="floating">
          <center>
            <div className="floating-label"> <b>Board ID</b> </div>
            <div className="floating-value"> {this.state.code == '' ? <img src="https://i.imgur.com/MQkFKEt.gif" alt="oops!"/> : this.state.code} </div>
          </center>
        </div>
        <Button variant="outline-secondary" size="lg" onClick = {() => this.props.history.push('/')} style={{ position: 'absolute', height: 60, width: 60, top: 10, left: 10, borderRadius: 50}}>&lt;</Button>
      </div>
    )
  }
}

export default Board
