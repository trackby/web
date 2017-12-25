import React from 'react'
import PropTypes from 'prop-types'
import { createSelector, createStructuredSelector } from 'reselect'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AdminActions from 'actions/admin'
import * as ReportActions from 'actions/reports'
import { AdminComponent } from 'components'

class AdminContainer extends React.Component {
  static propTypes = {
    addShow: PropTypes.func.isRequired,
    getReports: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    user: PropTypes.object.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    report: PropTypes.object,
  }
  static defaultProps = {
    report: null,
  }
  constructor(props) {
    super(props)
    props.getReports()
  }

  render() {
    const { addShow, report } = this.props
    return <AdminComponent addShow={addShow} reports={report} />
  }
}

const mapStateToProps = createStructuredSelector({
  user: createSelector(state => state.user, user => user),
  report: createSelector(state => state.report, report => report),
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...AdminActions, ...ReportActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
