import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Form, Icon, Message, Grid, Image, Header } from 'semantic-ui-react'

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

  StyledGrid = styled(Grid)`
    height: 100vh;
    vertical-align: middle;
  `

  render() {
    const { error, uploaded, uploading } = this.props
    const { StyledGrid } = this
    const ErrorComponent = error ? <Message color="red">Uppss.. There is some error during the process.</Message> : null
    const SuccessComponent = uploaded ? <Message color="blue">Successfully Uploaded! :) </Message> : null
    const { imagePreviewUrl } = this.state
    const MessageComponent = ErrorComponent || SuccessComponent
    let $imagePreview = null

    if (imagePreviewUrl) {
      $imagePreview = <Image src={imagePreviewUrl} centered alt="Preview" fluid />
    }

    return (
      <StyledGrid textAlign="center">
        <Grid.Column verticalAlign="middle" style={{ maxWidth: 400 }}>
          <Header as="h3" icon textAlign="center">
            <Icon name="upload" circular inverted />
          </Header>
          <Form onSubmit={this.handleSubmit} size="small">
            <Form.Input type="file" color="green" fluid size="large" onChange={this.handleImageChange} />
            {$imagePreview}
            <Button type="submit" color="green" fluid size="large" disabled={uploading}>
              {uploading ? <Icon name="asterisk" loading /> : 'Upload'}
            </Button>
          </Form>
          {MessageComponent}
        </Grid.Column>
      </StyledGrid>
    )
  }
}
