import React from 'react'

function Product({ title, price, description,image }) {
  return (
    <div>
    <h1>this is my product card component </h1>
        <h1>{title}</h1>
          <img src={image} width="150" />
        <p>Price: {price}</p>
        <p>Description: {description}</p>
    </div>
  )
}

export default Product