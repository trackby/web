import React from 'react'
import PropTypes from 'prop-types'
import { ImageHeader, TBMLoader, WatchButton, Rating, Rate } from 'components'

export default class ShowComponent extends React.Component {
  static propTypes = {
    markWatched: PropTypes.func.isRequired,
    unmarkWatched: PropTypes.func.isRequired,
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

  render() {
    const { fetched, fetching, show_name, info, image_url, watched } = this.props.show

    const actionComponents = (
      <div>
        <WatchButton watched={!!watched} onClick={this.handleWatch} />
        <Rating value={5} />,
        <Rate onRate={rate => alert(rate)} />
      </div>
    )
    return fetching && !fetched ? (
      <TBMLoader />
    ) : (
      <div>
        <ImageHeader title={show_name} info={info} image={image_url} bottomRightChildren={actionComponents} />
      </div>
    )
  }
}
