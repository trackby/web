import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShowActions from 'actions/show'
import * as AdminActions from 'actions/admin'
import { ShowComponent } from 'components'

class ShowContainer extends React.Component {
  static propTypes = {
    getShow: PropTypes.func.isRequired,
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,
    getComments: PropTypes.func.isRequired,
    createComment: PropTypes.func.isRequired,
    rateShow: PropTypes.func.isRequired,
    removeShow: PropTypes.func.isRequired,
    modifyShow: PropTypes.func.isRequired,

    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    props.getShow(props.match.params.name).then(() => props.getComments(props.match.params.name))
  }

  render() {
    const { show, markWatched, unmarkWatched, createComment, rateShow, removeShow, modifyShow, user } = this.props
    if (show.error) {
      return <Redirect to="/404" />
    }

    return (
      <ShowComponent
        show={show}
        markWatched={markWatched}
        unmarkWatched={unmarkWatched}
        createComment={createComment}
        rateShow={rateShow}
        modifyShow={modifyShow}
        removeShow={removeShow}
        user={user}
      />
    )
  }
}

const mapStateToProps = createStructuredSelector({
  show: createSelector(state => state.show, show => show),
  user: createSelector(state => state.user, user => user),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...ShowActions, ...AdminActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
