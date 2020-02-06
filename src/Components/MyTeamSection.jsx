import React from "react";
import { Card } from "react-bootstrap";
import faizanBardaiImg from "../img/faizan-bardai.jpg";
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
    <div id="my-team" className="container">
      <BannarText text={heading} />
      <div className="d-flex justify-content-center mb-4">
        {[
          paataBokeria,
          ivaneNareklishvili,
          daliborOsička,
          eugeniWunsch,
          faizanBardai
        ].map(teamMember => (
          <Card className="mr-2" style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src={faizanBardaiImg} /> */}
            <Card.Body>
              <Card.Title>{teamMember.name}</Card.Title>
              <Card.Text>{teamMember.about}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
