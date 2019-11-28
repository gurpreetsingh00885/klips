import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

const classes = {
  body: {
    height : '100%',
    width : '100%',
  }
};

class Home extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <center>
          <h1> Klips </h1>
          A cross-platform clipboard
          <br/><br/>
          <h3>
            What do you want to do?
          </h3> <br/><br/>
          <Button
            variant="outline-primary"
            size="lg"
            style={{
              display : "block",
              width: '80%',
              height: 80,
              maxWidth : 500,
              margin : 20
            }}
            onClick={() => this.props.history.push('/sender')}
          >
            Send
          </Button>
          <Button
            variant="outline-danger"
            size="lg"
            style={{
              display : "block",
              width: '80%',
              height: 80,
              maxWidth : 500,
              margin : 20
            }}
            onClick={() => this.props.history.push('/board')}
          > 
            Receive
          </Button>
        </center>

      </div>
    );
  }
}

export default Home;
