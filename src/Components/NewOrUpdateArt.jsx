import React from "react";
import { Button } from "react-bootstrap";

export default function NewOrUpdateArt() {
  return (
    <Button block className="rounded-pill" variant="primary">
      {false ? "Update" : "Add new Art"}
    </Button>
  );
}
