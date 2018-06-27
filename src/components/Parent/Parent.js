import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

import Child from '../Child';
import 'styling/semantic.less';

export default class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("App / props", props);
    this.state = {
      counter: 0
    };
    this.updateParentCounter = this.updateParentCounter.bind(this);
  }

  updateParentCounter() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>Parent</Header>
        <pre><code>this.state.counter:</code> <code>{this.state.counter}</code></pre>
        <Child
          triggerGrandparentUpdate={this.props.triggerGrandparentUpdate}
          triggerParentUpdate={this.updateParentCounter}
        />
      </Segment>
    );
  }
}
