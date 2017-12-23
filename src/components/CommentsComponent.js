import React from 'react'
import PropTypes from 'prop-types'
import { Button, Comment, Form, Header, Loader } from 'semantic-ui-react'
import moment from 'moment'

export default class CommentsComponent extends React.Component {
  static propTypes = {
    commentsFetched: PropTypes.bool.isRequired,
    commentsFetching: PropTypes.bool.isRequired,
    commentsError: PropTypes.bool.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    comments: PropTypes.array.isRequired,
    createComment: PropTypes.func.isRequired,
  }

  static defaultProps = {}

  state = { body: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleCommentCreate = () => {
    const { body } = this.state
    this.props.createComment(body)
  }

  renderComments = () => {
    const { comments } = this.props
    const commentComponents = comments.map((c, i) => (
      <Comment key={`comment-${i}`}>
        <Comment.Avatar src={c.image_url ? c.image_url : 'http://placehold.it/100x100'} />
        <Comment.Content>
          <Comment.Author as="span">{c.username}</Comment.Author>
          <Comment.Metadata>
            {' '}
            <div>{moment(c.created_at).fromNow(true)}</div>
          </Comment.Metadata>
          <Comment.Text>{c.comment_body}</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>
    ))

    return commentComponents
  }

  render() {
    const { commentsFetched, commentsFetching, commentsError, comments } = this.props
    const { body } = this.state

    return (
      <Comment.Group>
        <Header as="h3" dividing inverted>
          Comments
        </Header>
        <Form reply onSubmit={this.handleCommentCreate}>
          <Form.Input
            key="comment.body"
            required
            fluid
            placeholder="Write a comment"
            name="body"
            value={body}
            onChange={this.handleChange}
          />
          <Button content="Comment" labelPosition="left" icon="edit" color="green" disabled={body.length === 0} />
        </Form>
        {commentsFetching ? <Loader size="massive" /> : null}
        {this.renderComments()}
        {commentsFetched && comments.length === 0 ? <span>No comment</span> : null}
        {commentsError ? <span>Error fetching comments</span> : null}
      </Comment.Group>
    )
  }
}
