import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Player({el}) {
  return (
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
       <h3>{el.nationality}</h3>

       <h3>{el.age}</h3>
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default Player