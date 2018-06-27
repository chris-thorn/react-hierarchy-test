import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

import Parent from '../Parent';
import 'styling/semantic.less';

export default class Grandparent extends Component {
  constructor(props) {
    super(props);
    console.log("App / props", props);
    this.state = {
      counter: 0
    };
    this.updateGrandparentCounter = this.updateGrandparentCounter.bind(this);
  }

  updateGrandparentCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>Grandparent</Header>
        <pre><code>this.state.counter:</code> <code>{this.state.counter}</code></pre>
        <Parent
          triggerAppUpdate={this.props.triggerAppUpdate}
          triggerGrandparentUpdate={this.updateGrandparentCounter}
        />
      </Segment>
    );
  }
}
