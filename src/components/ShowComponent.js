import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { CommentsComponent, ImageHeader, Rate, Rating, TBMLoader, WatchButton } from 'components'
import styled from 'styled-components'

export default class ShowComponent extends React.Component {
  static propTypes = {
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    rateShow: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
  }

  handleWatch = () => {
    const { show, markWatched, unmarkWatched } = this.props
    if (show.watched) {
      unmarkWatched(show.show_name)
    } else {
      markWatched(show.show_name)
    }
  }
  handleComment = body => {
    const { show, createComment } = this.props
    createComment(show.show_name, body)
  }

  handleRate = rate => {
    const { show, rateShow } = this.props
    rateShow(show.show_name, rate)
  }

  BigSpan = styled.span`
    font-size: 18px;
    padding-right: 15px;
  `

  Container = styled.div`
    margin: 10px;
  `

  render() {
    const {
      fetched,
      fetching,
      show_name,
      info,
      image_url,
      watched,
      director_name,
      writer_name,
      season_count,
      rating,
      overall_rating,
      commentsFetched,
      commentsFetching,
      comments,
      createComment,
      commentsError,
    } = this.props.show

    const seasonCount = (
      <this.BigSpan>
        {season_count} Season{season_count > 1 ? 's' : ''}
      </this.BigSpan>
    )

    const actionComponents = (
      <div>
        <WatchButton watched={!!watched} onClick={this.handleWatch} />
        <Rating value={overall_rating} />
        <Rate onRate={this.handleRate} value={rating} />
        {seasonCount}
      </div>
    )

    const director = director_name ? (
      <div>
        <Header inverted size="small">
          Directed by
        </Header>
        {director_name}
      </div>
    ) : null

    const writer = writer_name ? (
      <Segment vertical>
        <Header inverted size="small">
          Written by
        </Header>
        {writer_name}
      </Segment>
    ) : null

    const showDetails = (
      <Segment vertical>
        {director}
        {writer}
      </Segment>
    )

    return fetching && !fetched ? (
      <TBMLoader />
    ) : (
      <div>
        <ImageHeader
          title={show_name}
          info={info}
          image={image_url}
          topRightChildren={showDetails}
          bottomRightChildren={actionComponents}
        />
        <this.Container>
          <Grid padded>
            <Grid.Row centered>
              <Grid.Column width={10}>
                <CommentsComponent
                  commentsFetched={commentsFetched}
                  commentsFetching={commentsFetching}
                  commentsError={commentsError}
                  comments={comments}
                  createComment={this.handleComment}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </this.Container>
      </div>
    )
  }
}
