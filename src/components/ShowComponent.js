import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Segment } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import {
  CommentsComponent,
  Episodes,
  ImageHeader,
  ModalForm,
  Rate,
  Rating,
  Seasons,
  TBMLoader,
  WatchButton,
} from 'components'

import styled from 'styled-components'

class ShowComponent extends React.Component {
  static propTypes = {
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    rateShow: PropTypes.func.isRequired,
    removeShow: PropTypes.func.isRequired,
    modifyShow: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
  }

  state = { showModifyModal: false }

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

  handleRemove = () => {
    const { show, removeShow } = this.props
    removeShow(show.show_name).then(() => this.props.history.push('/admin'))
  }

  handleModify = () => {
    this.setState({ showModifyModal: true })
  }

  handleModifyClose = () => {
    this.setState({ showModifyModal: false })
  }

  handleModifySubmit = parameter => {
    const { show, modifyShow } = this.props
    let filteredParam = {}
    Object.keys(parameter).map(k => {
      if (parameter[k]) filteredParam[k] = parameter[k]
    })
    modifyShow(show.show_name, filteredParam).then(() => {
      this.props.history.push(`/show/${parameter.show_name ? parameter.show_name : show.show_name}`)
      this.handleModifyClose()
    })
  }

  BigSpan = styled.span`
    font-size: 18px;
    padding-right: 15px;
  `

  Container = styled.div`
    margin: 10px;
  `

  Remove = styled.a`
    color: red;
    font-size: 18px;
    :hover {
      color: #efefef;
    }
    :visited,
    :active {
      color: red !important;
    }
  `

  Modify = styled.a`
    padding-left: 10px;
    color: green;
    font-size: 18px;
    :hover {
      color: #efefef;
    }
    :visited,
    :active {
      color: green !important;
    }
  `

  render() {
    const { props } = this
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
      episodes,
      seasons,
      overall_rating,
      commentsFetched,
      commentsFetching,
      comments,
      createComment,
      commentsError,
    } = props.show

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

    const modifyButton = this.props.user.isAdmin ? (
      <this.Modify onClick={this.handleModify} href="#">
        Update show
      </this.Modify>
    ) : null

    const removeButton = this.props.user.isAdmin ? (
      <this.Remove onClick={this.handleRemove} href="#">
        Remove this show
      </this.Remove>
    ) : null

    const showDetails = (
      <Segment vertical>
        {director}
        {writer}
        {removeButton}
        {modifyButton}
      </Segment>
    )

    const modifyModal = this.props.user.isAdmin ? (
      <ModalForm
        title="Update Show"
        isModify
        fields={[
          { name: 'show_name', placeholder: 'Show name', value: props.show.show_name },
          { name: 'image_url', placeholder: 'Image url', value: props.show.image_url },
          { name: 'info', placeholder: 'Info', value: props.show.info },
          { name: 'trailer_url', placeholder: 'Trailer url', value: props.show.trailer_url },
          { name: 'director_name', placeholder: 'Director name', value: props.show.director_name },
          { name: 'writer_name', placeholder: 'Writer name', value: props.show.writer_name },
        ]}
        onClose={this.handleModifyClose}
        show={this.state.showModifyModal}
        onSubmit={this.handleModifySubmit}
      />
    ) : null
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
        {modifyModal}
        <Seasons seasons={seasons} />
        <Episodes episodes={episodes} />
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

export default withRouter(ShowComponent)
