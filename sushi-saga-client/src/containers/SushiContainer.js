import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import MoreMoney from '../components/MoreMoney'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.map(sushi => <Sushi clickHandler={props.clickHandler} key={sushi.id} sushi={sushi}/>)
        }
        <MoreButton moreHandler={props.moreHandler}/>
        <MoreMoney moreMoney={props.moreMoney}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer