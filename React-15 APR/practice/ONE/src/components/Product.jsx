import React from 'react'

export default function Product( {title, price, description, image}) {
  return (
    <div>
        <h1>{title}</h1> 
        <img src={image} width={150} />
        <p>Price: {price}</p>
        <p>Description: {description}</p>
    </div>
  )
}
