import React from 'react'
import { TBMLoader } from 'components'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

const ComingSoonContainer = () =>
      <TBMLoader />


const mapStateToProps = createStructuredSelector({

})


export default connect(mapStateToProps)(ComingSoonContainer)
