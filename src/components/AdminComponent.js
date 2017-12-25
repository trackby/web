import React from 'react'
import PropTypes from 'prop-types'
import { AvatarHeader, BigButton, ModalForm, TBMLoader } from 'components'

export default class AdminComponent extends React.Component {
  static propTypes = {
    addShow: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  }

  handleAddShow = params => {
    this.props.addShow(params.show, params)
    this.setState({ open: false })
  }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => this.setState({ open: true })

  fields = [
    { name: 'show', placeholder: 'Show name' },
    { name: 'image_url', placeholder: 'Image url' },
    { name: 'info', placeholder: 'Info' },
    { name: 'trailer_url', placeholder: 'Trailer url' },
    { name: 'director_name', placeholder: 'Director name' },
    { name: 'writer_name', placeholder: 'Writer name' },
  ]

  render() {
    return (
      <div>
        <BigButton text="Create Show" onClick={this.handleOpen} />
        <ModalForm
          show={this.state.open}
          title={'Create Show'}
          fields={this.fields}
          onSubmit={this.handleAddShow}
          onClose={this.handleClose}
        />
      </div>
    )
  }
}
