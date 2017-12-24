import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

export default class ImageUpload extends React.Component {
  static propTypes = {
    fileUpload: PropTypes.func.isRequired,
    uploading: PropTypes.bool.isRequired,
    uploaded: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    error: false,
    uploading: false,
    uploaded: false,
  }

  state = {
    file: '',
    imagePreviewUrl: '',
    category: 'users',
  }

  handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', this.state.file)
    formData.append('category', this.state.category)

    this.props.fileUpload(formData)
  }

  handleImageChange = e => {
    const reader = new FileReader()
    const file = e.target.files[0]
    this.setState({ file })

    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)
  }

  StyledMessage = styled(Message)`
    background-color: #2f2f2f !important;
    color: #ececec !important;
  `
  render() {
    const { error, uploaded, uploading } = this.props
    const { StyledMessage } = this
    const ErrorComponent = error ? <StyledMessage>Uppss.. There is some error during the process.</StyledMessage> : null
    const SuccessComponent = uploaded ? <StyledMessage>Successfully Uploaded! :) </StyledMessage> : null
    const { imagePreviewUrl } = this.state
    let $imagePreview = null

    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="Uploaded" />
    }

    return (
      <div>
        {ErrorComponent}
        {SuccessComponent}
        <Form onSubmit={this.handleSubmit} size="small">
          <Form.Input type="file" color="green" fluid size="large" onChange={this.handleImageChange} />
          <Button type="submit" color="green" fluid size="large" disabled={uploading}>
            {uploading ? <Icon name="asterisk" loading /> : 'Upload'}
          </Button>
        </Form>
        {$imagePreview}
      </div>
    )
  }
}
