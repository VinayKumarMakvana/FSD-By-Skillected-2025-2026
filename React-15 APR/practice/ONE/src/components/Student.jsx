import React from 'react'
export default function Student({name, age, image}) {
  return (
    <div>
        <h1>Hellow my is {name}</h1>
        <img src={image} width={150} />
        <h3>My age is {age}</h3>
    </div>
  )
}
