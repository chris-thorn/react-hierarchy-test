import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalTest extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    let modalOpen = 'false';

    (this.state.modalOpen === true) ? modalOpen = 'true' : modalOpen = 'false';

    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <pre>
            <code>this.state.modalOpen:</code> <code>{ (this.state.modalOpen === true) ? 'TRUE' : 'FALSE' }</code>
          </pre>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
