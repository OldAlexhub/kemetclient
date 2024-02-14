import React from "react";
import { Container, Row, Col, ListGroup, Card } from "react-bootstrap";
import Alex from "../images/alex.jpg";
import One from "../images/maktaba.jpg";
import Two from "../images/montaza.jpg";
import Three from "../images/al3a.jpg";
import Four from "../images/mat7af.jpg";
import Five from "../images/masra7.jpg";
import Six from "../images/3amod.jpg";
import Seven from "../images/stanley.jpg";
import Eight from "../images/cornesh.jpg";
import Nine from "../images/royal.jpg";
import Ten from "../images/Catacombs.jpg";

import res1 from "../images/res1.jpg";
import res2 from "../images/res2.jpg";
import res3 from "../images/res3.jpg";
import res4 from "../images/res4.jpg";
import res5 from "../images/res5.jpg";
import res6 from "../images/res6.jpg";
import res7 from "../images/res7.jpg";
import res8 from "../images/res8.jpg";
import res9 from "../images/res9.jpg";
import res10 from "../images/res10.jpg";

const PlacesToVisit = () => {
  const places = [
    {
      name: "Bibliotheca Alexandrina",
      description:
        "A modern reimagining of the ancient Library of Alexandria, this architectural marvel houses millions of books and hosts cultural events.",
      image: One,
    },
    {
      name: "Montazah Palace Gardens",
      description:
        "Beautifully landscaped gardens surrounding a royal palace, offering a serene escape with stunning views of the Mediterranean.",
      image: Two,
    },
    {
      name: "Fort Qaitbey",
      description:
        "Situated on the site of the ancient Lighthouse of Alexandria, this 15th-century fort offers historical insights and panoramic sea views.",
      image: Three,
    },
    {
      name: "Alexandria National Museum",
      description:
        "A great place to explore Alexandria's rich history, from ancient times through the modern era.",
      image: Four,
    },
    {
      name: "Roman Amphitheatre",
      description:
        "Discover this well-preserved Roman site in the heart of the city, which once hosted theatrical performances.",
      image: Five,
    },
    {
      name: "Pompey's Pillar",
      description:
        "An ancient Roman triumphal column, this is one of Alexandria's most famous archaeological landmarks.",
      image: Six,
    },
    {
      name: "Stanley Bridge",
      description:
        "A modern landmark, this bridge is a great spot for a scenic walk with views of the Mediterranean.",
      image: Seven,
    },
    {
      name: "Corniche",
      description:
        "A bustling waterfront promenade perfect for leisurely strolls, enjoying the sea breeze, and experiencing local life.",
      image: Eight,
    },
    {
      name: "Royal Jewelry Museum",
      description:
        "Home to a dazzling collection of jewels and artifacts from the Muhammad Ali Dynasty.",
      image: Nine,
    },
    {
      name: "Catacombs of Kom el Shoqafa",
      description:
        "An ancient necropolis, combining Roman, Greek, and Egyptian cultural points, regarded as one of the Seven Wonders of the Middle Ages.",
      image: Ten,
    },
  ];
  return (
    <Container>
      <h2>Top 10 Places to Visit in Alexandria</h2>
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
      name: "Byblos Restaurant",
      description:
        "Offers delicious Lebanese cuisine with a beautiful view of the sea.",
      image: res1,
    },
    {
      name: "Fish Market",
      description:
        "Known for its fresh seafood and scenic location on the Mediterranean.",
      image: res2,
    },
    {
      name: "Greek Club",
      description:
        "A historic restaurant serving Greek and Mediterranean dishes, famous for its stunning views.",
      image: res3,
    },
    {
      name: "Latino Café & Restaurant",
      description:
        "Offers a mix of Egyptian and international cuisine in a cozy, modern setting.",
      image: res4,
    },
    {
      name: "Santorini Greek Restaurant",
      description:
        "A place to enjoy authentic Greek food with a lovely ambience.",
      image: res5,
    },
    {
      name: "Adriatico Restaurant",
      description:
        "Specializes in Italian cuisine, known for its pasta and pizza.",
      image: res6,
    },
    {
      name: "Delices",
      description:
        "A popular spot for French pastries, desserts, and light meals.",
      image: res7,
    },
    {
      name: "Hosny for Grilled & Seafood",
      description: "A local favorite for grilled meats and seafood.",
      image: res8,
    },
    {
      name: "Balbaa Village",
      description:
        "Famous for traditional Egyptian and Middle Eastern dishes, especially grilled items.",
      image: res9,
    },
    {
      name: "White and Blue Restaurant",
      description:
        "Offers a range of Mediterranean dishes with an emphasis on seafood, set in a charming location with sea views.",
      image: res10,
    },
  ];

  return (
    <Container>
      <h2>Top 10 Restaurants in Alexandria</h2>
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

const Alexandria = () => {
  return (
    <Container>
      <Row className="align-items-center mb-4">
        <Col lg={6}>
          <img
            src={Alex}
            alt="Alexandria"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6}>
          <p className="text-justify">
            Alexandria, Egypt's second-largest city and a major economic hub, is
            located on the Mediterranean Sea's southern coast. Founded by
            Alexander the Great in 331 BC, it has a rich history that blends
            Greek, Roman, and Egyptian influences, making it a unique cultural
            melting pot. Historically, it was home to the Lighthouse of
            Alexandria, one of the Seven Wonders of the Ancient World, and the
            Great Library of Alexandria, the largest library of the ancient
            world. Today, Alexandria is known for its historical landmarks,
            beautiful beaches, and vibrant cosmopolitan atmosphere.
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

export default Alexandria;
