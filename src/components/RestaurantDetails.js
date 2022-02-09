import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'
function RestaurantDetails() {
  const { data, setData } = useState([])
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((data) => setData(data.restaurants))
    }

    fetchData()
  }, [])

  const params = useParams()
  const { id } = params;
  console.log("Our id is", id);

  const details = data.find((i) => i.id == id)
  console.log("details is", details);
  return (
    <div>
      <Link className="btn btn-outline-dark my-2 rounded bt-sm" to="/">Back</Link>
      {details?
      (<Row className="my-3">
        <Col md={3}>
          Image className
        </Col>
      </Row>):null }
    </div>
  )
}

export default RestaurantDetails
