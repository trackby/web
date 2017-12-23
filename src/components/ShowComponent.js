import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { CommentsComponent, ImageHeader, Rate, Rating, TBMLoader, WatchButton } from 'components'

export default class ShowComponent extends React.Component {
  static propTypes = {
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
  }

  handleWatch = () => {
    const { show, markWatched, unmarkWatched } = this.props
    if (show.watched) {
      unmarkWatched(show.id)
    } else {
      markWatched(show.id)
    }
  }
  handleComment = body => {
    const { show, createComment } = this.props
    createComment(show.id, body)
  }

  render() {
    const {
      fetched,
      fetching,
      show_name,
      info,
      image_url,
      watched,
      commentsFetched,
      commentsFetching,
      comments,
      createComment,
      commentsError,
    } = this.props.show

    const actionComponents = (
      <div>
        <WatchButton watched={!!watched} onClick={this.handleWatch} />
        <Rating value={5} />
        <Rate onRate={rate => alert(rate)} />
      </div>
    )
    return fetching && !fetched ? (
      <TBMLoader />
    ) : (
      <div>
        <ImageHeader title={show_name} info={info} image={image_url} bottomRightChildren={actionComponents} />
        <Grid centered padded>
          <Grid.Column>
            <CommentsComponent
              commentsFetched={commentsFetched}
              commentsFetching={commentsFetching}
              commentsError={commentsError}
              comments={comments}
              createComment={this.handleComment}
            />
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
