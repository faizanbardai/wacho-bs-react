import React from "react";
import { Card, Container } from "react-bootstrap";
import BannarText from "../Components/BannarText";

export default function MyTeamSection({ section }) {
  const {
    heading,
    teimurazGonjilaschwili,
    paataBokeria,
    ivaneNareklishvili,
    daliborOsička,
    eugeniWunsch,
    faizanBardai,
  } = section;

  return (
    <section id="my-team">
      <BannarText text={heading} />
      <Container fluid>
        <div className="row mb-4 d-flex justify-content-center">
          {[
            teimurazGonjilaschwili,
            paataBokeria,
            ivaneNareklishvili,
            daliborOsička,
            eugeniWunsch,
            faizanBardai,
          ].map((teamMember, index) => (
            <Card
              key={index}
              className="col mb-2 mr-2"
              style={{
                minWidth: "250px",
                maxWidth: "250px",
              }}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  style={{ height: "200px", width: "200px" }}
                  className="rounded-circle mt-2"
                  variant="top"
                  src={teamMember.img}
                />
              </div>
              <Card.Body>
                <Card.Title>{teamMember.name}</Card.Title>
                <Card.Text>{teamMember.about}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
