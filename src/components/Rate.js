import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import {Icon, Rating} from 'semantic-ui-react'
import styled from 'styled-components'

const Rate = ({value, onRate}) => {

  const handleRate = (e, {rating}) => {
    onRate(rating);
  };
  const StyledRating = styled(Rating)`
     .icon {
        color: rgba(255,255,255,0.5) !important;
     }
  `
  const RatingComponent = () => (
    <StyledRating icon='star' size='large' defaultRating={value} maxRating={5} onRate={handleRate}/>
  )

  const StyledDiv = styled.div`
    color: #ECECEC  !important;
    font-size: 18px;
    display: inline-block;
    margin: 0 20px;
    span{
      margin-right: 10px
    }
  `

  return value === 0 ?
    (<StyledDiv><Icon name={'empty star'}/><span>Rate</span><RatingComponent/></StyledDiv>)
    : (
      <StyledDiv><Icon name={'star'}/><span>{value.toFixed(1)}</span><RatingComponent/></StyledDiv>
    )
}

Rate.propTypes = {
  value: PropTypes.number,
  onRate: PropTypes.func.isRequired,
}

Rate.defaultProps = {
  value: 0,

}


export default pure(Rate)
