import React from "react";
import { Card, Container } from "react-bootstrap";
import BannarText from "../Components/BannarText";

export default function MyTeamSection({ section }) {
  const {
    heading,
    paataBokeria,
    ivaneNareklishvili,
    daliborOsička,
    eugeniWunsch,
    faizanBardai
  } = section;
  return (
    <section id="my-team">
      <BannarText text={heading} />
      <Container fluid>
        <div className="row mb-4 d-flex justify-content-center">
          {[
            paataBokeria,
            ivaneNareklishvili,
            daliborOsička,
            eugeniWunsch,
            faizanBardai
          ].map(teamMember => (
            <Card
              className="col mb-2 mr-2"
              style={{
                minWidth: "250px",
                maxWidth: "250px"
              }}
            >
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
