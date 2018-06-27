import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';

import 'styling/semantic.less';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <Segment>
        <Header as='h3'>Child</Header>
        <pre><code>this.state.counter:</code> <code>{this.state.counter}</code></pre>
        <Button onClick={this.props.triggerGrandparentUpdate}>Update Grandparent</Button>
        <Button onClick={this.props.triggerParentUpdate}>Update Parent</Button>
      </Segment>
    );
  }
}
