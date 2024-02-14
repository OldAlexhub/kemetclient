import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Cairo1 from "../images/cairo1.jpg";

import One from "../images/One1.jpg";
import Two from "../images/Two2.jpg";
import Three from "../images/Three3.jpg";
import Four from "../images/Four4.jpg";
import Five from "../images/Five5.png";
import Six from "../images/Six6.jpg";
import Seven from "../images/Seven7.jpg";
import Eight from "../images/Eight8.jpg";
import Nine from "../images/Nine9.jpg";
import Ten from "../images/Ten10.jpg";

import res1 from "../images/res11.jpg";
import res2 from "../images/res12.jpg";
import res3 from "../images/res13.jpg";
import res4 from "../images/res14.jpg";
import res5 from "../images/res15.png";
import res6 from "../images/res16.jpeg";
import res7 from "../images/res17.jpg";
import res8 from "../images/res18.jpg";
import res9 from "../images/res19.jpg";
import res10 from "../images/res20.jpg";

const PlacesToVisit = () => {
  const places = [
    {
      name: "The Pyramids of Giza",
      description:
        "Iconic ancient structures, one of the Seven Wonders of the Ancient World.",
      image: One,
    },
    {
      name: "The Great Sphinx of Giza",
      description:
        "A colossal limestone statue with the body of a lion and the head of a pharaoh.",
      image: Two,
    },
    {
      name: "Egyptian Museum",
      description:
        "Home to an extensive collection of ancient Egyptian artifacts.",
      image: Three,
    },
    {
      name: "Khan El Khalili Bazaar",
      description: "A famous bazaar and souq in the historic center of Cairo.",
      image: Four,
    },
    {
      name: "The Citadel of Cairo",
      description: "A medieval Islamic-era fortification and historical site.",
      image: Five,
    },
    {
      name: "Al-Azhar Mosque",
      description:
        "One of Cairo’s earliest mosques, renowned for its beautiful architecture.",
      image: Six,
    },
    {
      name: "The Hanging Church",
      description:
        "An ancient church in Cairo, known for its history and architecture.",
      image: Seven,
    },
    {
      name: "Saqqara",
      description:
        "An ancient burial ground serving as the necropolis for the Ancient Egyptian capital, Memphis.",
      image: Eight,
    },
    {
      name: "Cairo Tower",
      description:
        "A notable modern landmark offering panoramic views of Cairo.",
      image: Nine,
    },
    {
      name: "The Coptic Museum",
      description:
        "A museum in Cairo housing the world’s most important collection of Egyptian Christian artifacts.",
      image: Ten,
    },
  ];
  return (
    <Container>
      <h2>Top 10 Places to Visit in Cairo</h2>
      <ListGroup>
        {places.map((place, index) => (
          <ListGroup.Item key={index}>
            <Card>
              <Card.Img variant="top" src={place.image} />
              <Card.Body>
                <Card.Title>{place.name}</Card.Title>
                <Card.Text>{place.description}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const TopRestaurants = () => {
  const restaurants = [
    {
      name: "Sequoia",
      description: "Offers Mediterranean cuisine with a view of the Nile.",
      image: res1,
    },
    {
      name: "Koshary Abou Tarek",
      description: "Famous for serving the traditional Egyptian dish, Koshary.",
      image: res2,
    },
    {
      name: "Al Khal Egyptian Restaurant",
      description: "Known for its authentic Egyptian dishes.",
      image: res3,
    },
    {
      name: "Felfela",
      description:
        "A well-known eatery offering a variety of Egyptian and Middle Eastern fare.",
      image: res4,
    },
    {
      name: "Naguib Mahfouz Cafe",
      description:
        "Offers traditional Egyptian cuisine in a historical setting.",
      image: res5,
    },
    {
      name: "The Grill Restaurant & Lounge",
      description: "Fine dining with a focus on grilled specialties.",
      image: res6,
    },
    {
      name: "Taboula Lebanese Restaurant",
      description: "Serves Lebanese and Middle Eastern cuisine.",
      image: res7,
    },
    {
      name: "Zooba",
      description:
        "Known for its contemporary take on traditional Egyptian street food.",
      image: res8,
    },
    {
      name: "Andrea Mariouteya",
      description: "Offers grilled meats and traditional Egyptian dishes.",
      image: res9,
    },
    {
      name: "Maison Thomas",
      description: "A historic pizzeria known for its unique pizza flavors.",
      image: res10,
    },
  ];

  return (
    <Container>
      <h2>Top 10 Restaurants in Cairo</h2>
      <ListGroup>
        {restaurants.map((restaurant, index) => (
          <ListGroup.Item key={index}>
            <Card>
              <Card.Img variant="top" src={restaurant.image} />
              <Card.Body>
                <Card.Title>{restaurant.name}</Card.Title>
                <Card.Text>{restaurant.description}</Card.Text>
              </Card.Body>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

const Cairo = () => {
  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col lg={6}>
          <img
            src={Cairo1}
            alt="Alexandria"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6}>
          <p className="text-justify">
            Cairo, the capital of Egypt, is one of the largest cities in Africa
            and the Middle East. Renowned for its rich history and vibrant
            culture, Cairo has been a significant hub of civilization for
            thousands of years. The city is home to various landmarks that span
            multiple eras, from the ancient to the modern. Among its most famous
            sites are the Egyptian Museum, which houses a vast collection of
            ancient Egyptian artifacts, and the historic Khan El Khalili Bazaar,
            known for its bustling alleys and traditional crafts. Giza, a
            neighboring city to Cairo, is part of the Greater Cairo metropolis.
            It is most famous for the Giza Plateau, home to the iconic Pyramids
            of Giza and the Great Sphinx. These pyramids, including the Great
            Pyramid of Khufu, are some of the most magnificent and enduring
            symbols of Ancient Egyptian civilization and are among the Seven
            Wonders of the Ancient World. The area serves as a stark reminder of
            the historical prowess of ancient Egypt in architecture and
            engineering. Together, Cairo and Giza offer a unique blend of the
            ancient and the modern, showcasing Egypt's long and diverse history.
            Visitors can explore ancient wonders, delve into the rich tapestry
            of Egyptian culture, and experience the dynamic energy of
            contemporary Egyptian life.
          </p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <PlacesToVisit />
        </Col>
        <Col md={6}>
          <TopRestaurants />
        </Col>
      </Row>
    </Container>
  );
};

export default Cairo;
