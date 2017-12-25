import React from 'react'
import PropTypes from 'prop-types'
import { AvatarHeader, TBMLoader } from 'components'
import { Button, Form, Modal } from 'semantic-ui-react'

export default class ModalForm extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    show: PropTypes.bool,
    // eslint-disable-next-line react/forbid-prop-types
    fields: PropTypes.array.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    isModify: PropTypes.bool,
  }

  static defaultProps = {
    show: false,
    isModify: false,
  }

  static constructor = props => {
    let fields = {}
    props.fields.map(f => {
      fields[f.name] = props.isModify ? f.value : ''
      return null
    })
    this.fields = fields
    this.setState({ ...fields })
  }

  state = {}

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)

    this.setState({ ...this.fields })
  }

  renderFields = () =>
    this.props.fields.map(f => (
      <Form.Input
        key={`form-input-${f.name}`}
        {...f}
        required={!this.props.isModify}
        fluid
        iconPosition="left"
        value={this.state[f.name]}
        onChange={this.handleChange}
      />
    ))

  render() {
    const { title, show, onClose } = this.props
    return (
      <Modal open={show} onClose={onClose}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Content>
          <Form size="large" onSubmit={this.handleSubmit}>
            {this.renderFields()}
            <Button color="green" fluid size="large">
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}
