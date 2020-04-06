import React, { Fragment } from 'react';
import MoreButton from '../components/MoreButton';
import Sushi from '../components/Sushi';

const SushiContainer = (props) => {

  const sushiMapper = (sushiArray) =>{
  return sushiArray.map((piece, index) => 
  {return <Sushi 
    key={index} 
    sushi={piece} 
    eatSushi={props.eatSushi} 
    ateSushi={props.ateSushi} 
    budget={props.budget} />})
  }

  return (
    <Fragment>
      <div className="belt">
        {sushiMapper(props.sushi)}
        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer