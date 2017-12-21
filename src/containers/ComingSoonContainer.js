import React from 'react'
import { ImageHeader } from 'components'
import { createStructuredSelector } from 'reselect'

import { connect } from 'react-redux'

const ComingSoonContainer = () =>
      <ImageHeader title='TrackBy.me' subtitle='Coming Soon' info='Track your favourite shows anywhere, anytime'/>


const mapStateToProps = createStructuredSelector({

})


export default connect(mapStateToProps)(ComingSoonContainer)
