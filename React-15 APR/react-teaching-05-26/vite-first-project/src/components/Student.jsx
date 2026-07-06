import React from 'react'

function Student({name, course, city,image}) {
  return (
    <div>
      <img src={image} width="150" />
        <h1>Hello my name is {name}</h1>
        <p>Course: {course}</p>
        <p>City: {city}</p>
    </div>
  )
}

export default Student

