import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

import Grandparent from './components/Grandparent';
import ModalTest from './components/ModalTest';
import 'styling/semantic.less';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.updateAppCounter = this.updateAppCounter.bind(this);
  }

  updateAppCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Grid centered style={{paddingTop: '3em'}}>
        <Grid.Column computer={8} mobile={16}>
          <Segment>
            <Header as='h3'>App</Header>
            <pre><code>this.state.counter:</code> <code>{this.state.counter}</code></pre>
            <pre><code>this.state.modalOpen:</code> <code>{ (this.state.modalOpen) ? 'TRUE' : 'FALSE' }</code></pre>
            <ModalTest />
            <Grandparent triggerAppUpdate={this.updateAppCounter} />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
