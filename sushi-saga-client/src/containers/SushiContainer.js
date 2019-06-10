import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi clickHandler={props.clickHandler} key={sushi.id} sushi={sushi}/>)
        }
        <MoreButton moreHandler={props.moreHandler}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer