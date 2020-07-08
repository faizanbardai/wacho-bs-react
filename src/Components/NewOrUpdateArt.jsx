import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { api_updateImage, api_add_art } from "../APIs";
import Loader from "react-loader-spinner";

export default function NewOrUpdateArt(props) {
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState("");
  const [picture, setpicture] = useState(null);
  const [artist, setartist] = useState("");
  const [price, setprice] = useState("");
  const [thumbnailWidth, setthumbnailWidth] = useState("");
  const [thumbnailHeight, setthumbnailHeight] = useState("");
  const [confirmDelete, setconfirmDelete] = useState(false);
  const handleClose = () => {
    setshow(false);
  };
  const handleShow = () => {
    setshow(true);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    if (props.art) {
      //
    } else {
      console.log("adding a new art");
      const data = new FormData();
      data.append("key", "f4249a89674c3ba51752e0c729919897");
      data.append("image", picture);
      const responseImage = await api_updateImage(data);
      const newArtImage = await responseImage.json();
      console.log(newArtImage);
      console.log(newArtImage.data.medium.url, newArtImage.data.thumb.url);
      const response = await api_add_art(
        {
          src: newArtImage.data.medium.url,
          thumbnail: newArtImage.data.thumb.url,
          thumbnailWidth,
          thumbnailHeight,
          caption: title,
          tags: { value: artist, title: "artist" },
          price,
        },
        localStorage.getItem("token")
      );
      const newArt = await response.json();
      console.log(newArt);
      handleClose();
      setloading(false);
    }
  };

  return (
    <>
      <Button
        block
        className="rounded-pill"
        variant="primary"
        onClick={handleShow}
      >
        {false ? "Update" : "Add new Art"}
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.art ? title : "New Art"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="file"
                required={!props.art}
                name="picture"
                accept="image/*"
                onChange={(e) => setpicture(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={artist}
                name="artist"
                required
                onChange={(e) => setartist(e.target.value)}
                placeholder="Enter artist name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={title}
                name="title"
                required
                onChange={(e) => settitle(e.target.value)}
                placeholder="Enter art title"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={thumbnailHeight}
                name="thumbnailHeight"
                required
                onChange={(e) => setthumbnailHeight(e.target.value)}
                placeholder="Enter art height"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={thumbnailWidth}
                name="thumbnailWidth"
                required
                onChange={(e) => setthumbnailWidth(e.target.value)}
                placeholder="Enter art width"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                value={price}
                name="price"
                required
                onChange={(e) => setprice(e.target.value)}
                placeholder="Enter art price"
              />
            </Form.Group>
            <div className="d-flex justify-content-between">
              {props.product &&
                (confirmDelete ? (
                  <Button
                    onClick={() => {
                      // api_delete_art(_id, localStorage.getItem("token"));
                      // props.removeDeletedProduct(_id);
                      handleClose();
                    }}
                    variant="outline-danger"
                  >
                    Sure?
                  </Button>
                ) : (
                  <Button
                    onClick={() => setconfirmDelete(true)}
                    variant="outline-danger"
                  >
                    Delete
                  </Button>
                ))}
              {!loading ? (
                <Button variant="primary" type="submit">
                  Save
                </Button>
              ) : (
                <Button variant="secondary" disabled>
                  <Loader type="Puff" color="#00BFFF" height={10} width={10} />
                </Button>
              )}
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
