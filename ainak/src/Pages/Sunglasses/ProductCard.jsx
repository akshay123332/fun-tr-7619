import React from 'react'

const ProductCard = ({id,image,desc,price,rating,frameshape,compatible}) => {
  return (
    <div>
        <img style={{width:"50%"}} src={image} alt={desc} />
        <h2>{desc}</h2>
        <h3>{`${desc} :  ${frameshape} :  ${compatible}`}</h3>
        <h2>Rs : {price}</h2>
        <p>Rating:{rating}</p>
        <button>ADD TO CART</button>
    </div>
  )
}

export default ProductCard