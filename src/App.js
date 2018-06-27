import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

import Grandparent from './components/Grandparent';
import 'styling/semantic.less';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <Grid centered style={{paddingTop: '3em'}}>
        <Grid.Column computer={8} mobile={16}>
          <Segment>
            <Header as='h3'>App</Header>
            <pre><code>this.state.counter:</code> <code>{this.state.counter}</code></pre>
            <Grandparent />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
