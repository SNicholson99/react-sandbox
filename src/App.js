import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';

class App extends Component {
  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Toggle>Heading</Panel.Toggle>
        </Panel.Heading>
        <Panel.Body>body text</Panel.Body>
      </Panel>
    );
  }
}

export default App;
