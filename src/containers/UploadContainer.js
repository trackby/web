import React from 'react'
import PropTypes from 'prop-types'
import { ImageUpload } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UploadActions from 'actions/upload'

class UploadContainer extends React.Component {
  static propTypes = {
    fileUpload: PropTypes.func.isRequired,
    uploaded: PropTypes.bool.isRequired,
    uploading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
  }

  fileUpload = params => {
    this.props.fileUpload(params)
  }

  render() {
    const { error, uploaded, uploading } = this.props
    return <ImageUpload fileUpload={this.fileUpload} uploading={uploading} uploaded={uploaded} error={error} />
  }
}

const mapStateToProps = createStructuredSelector({
  error: createSelector(state => state.uploadReducer.error, error => error),
  uploading: createSelector(state => state.uploadReducer.uploading, uploading => uploading),
  uploaded: createSelector(state => state.uploadReducer.uploaded, uploaded => uploaded),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UploadActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer)
