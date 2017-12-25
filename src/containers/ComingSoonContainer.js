import React from 'react'
import { ImageHeader } from 'components'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

const ComingSoonContainer = () => <div>coming soon</div>

const mapStateToProps = createStructuredSelector({})

export default connect(mapStateToProps)(ComingSoonContainer)
