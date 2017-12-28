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
    id: '',
  }

  categoryOptions = [
    { key: 'u', text: 'Users', value: 'users' },
    { key: 't', text: 'Tv Show', value: 'tvshow' },
    { key: 's', text: 'Season', value: 'season' },
    { key: 'e', text: 'Episode', value: 'episode' },
    { key: 'm', text: 'Movie', value: 'movie' },
  ]

  handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', this.state.file)
    formData.append('category', this.state.category)
    formData.append('id', this.state.id)

    this.props.fileUpload(formData)
    this.setState({ imagePreviewUrl: '' })
  }

  handleImageChange = e => {
    e.preventDefault()
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

  handleIdChange = e => {
    this.setState({ id: e.target.value })
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
            <Form.Select
              required
              options={this.categoryOptions}
              placeholder="Category"
              onChange={(e, { value }) => this.setState({ category: value })}
            />
            <Form.Input required size="tiny" type="text" placeholder="2578" fluid onChange={this.handleIdChange} />
            <Form.Input required type="file" color="green" fluid size="large" onChange={this.handleImageChange} />
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
