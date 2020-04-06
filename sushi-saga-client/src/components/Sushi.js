import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id, name, img_url, price} = props.sushi;
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.budget >= price ? props.eatSushi(id, price) : alert("You're broke")}>
        { 
          props.ateSushi.includes(id) ?
            null
          :
            <img src={img_url} width="100%" alt={name} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi