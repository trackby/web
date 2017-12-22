import React from 'react'
import PropTypes from 'prop-types'
import { ImageHeader, TBMLoader } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ShowActions from 'actions/show'

class ShowContainer extends React.Component {
  static propTypes = {
    getShow: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    show: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    props.getShow(props.match.params.id)
  }

  render() {
    const { fetched, fetching, id, show_name, info, image_url, trailer_url } = this.props.show
    return fetching && !fetched ? <TBMLoader /> : <ImageHeader title={show_name} info={info} image={image_url} />
  }
}

const mapStateToProps = createStructuredSelector({
  show: createSelector(state => state.show, show => show),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ShowActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
