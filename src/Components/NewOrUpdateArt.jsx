import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { api_updateImage, api_add_art, api_update_art } from "../APIs";
import Loader from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function NewOrUpdateArt(props) {
  const [show, setshow] = useState(false);
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState("");
  const [picture, setpicture] = useState(null);
  const [artist, setartist] = useState("");
  const [price, setprice] = useState("");
  const [thumbnailWidth, setthumbnailWidth] = useState("");
  const [thumbnailHeight, setthumbnailHeight] = useState("");
  // const [confirmDelete, setconfirmDelete] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
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
      const updatedArt = await api_update_art(
        props.art._id,
        { price },
        localStorage.getItem("token")
      ).then((x) => x.json());
      props.updateArt(updatedArt);
      handleClose();
      setloading(false);
    } else {
      const data = new FormData();
      data.append("key", "f4249a89674c3ba51752e0c729919897");
      data.append("image", picture);
      const responseImage = await api_updateImage(data);
      const newArtImage = await responseImage.json();
      const response = await api_add_art(
        {
          src: newArtImage.data.medium.url,
          thumbnail: newArtImage.data.thumb.url,
          thumbnailWidth,
          thumbnailHeight,
          caption: title,
          artist: artist,
          price,
        },
        localStorage.getItem("token")
      );
      const newArt = await response.json();
      props.addNewArt(newArt);
      handleClose();
      setloading(false);
    }
  };
  useEffect(() => {
    if (props.art) {
      settitle(props.art.caption);
      setartist(props.art.artist);
      setthumbnailHeight(props.art.thumbnailHeight);
      setthumbnailWidth(props.art.thumbnailWidth);
      setprice(props.art.price);
      setPreviewImage(props.art.src);
    }
  }, [props.art]);

  return (
    <>
      {!props.art && (
        <Button
          block
          className="rounded-pill"
          variant="primary"
          onClick={handleShow}
        >
          Add new Art
        </Button>
      )}
      {props.art && (
        <FontAwesomeIcon icon={faPen} size={"xs"} onClick={handleShow} />
      )}

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.art ? title : "New Art"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            {previewImage && (
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div
                  style={{
                    display: "table-cell",
                    width: "300px",
                    height: "300px",
                    verticalAlign: "middle",
                  }}
                >
                  <img
                    alt="art"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      display: "block",
                      margin: "0 auto",
                    }}
                    // src="https://picsum.photos/2000"
                    src={previewImage}
                  ></img>
                </div>
              </div>
            )}
            <div className={previewImage ? "col-12 col-md-6" : "col-12"}>
              <Form onSubmit={handleSubmit}>
                {!props.art && (
                  <Form.Group>
                    <Form.Control
                      type="file"
                      required={!props.art}
                      name="picture"
                      accept="image/*"
                      onChange={(e) => {
                        setpicture(e.target.files[0]);
                        setPreviewImage(URL.createObjectURL(e.target.files[0]));
                      }}
                    />
                  </Form.Group>
                )}
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={artist}
                    name="artist"
                    disabled={props.art}
                    required
                    onChange={(e) => setartist(e.target.value)}
                    placeholder="Artist"
                  />
                </Form.Group>
                {!props.art && (
                  <Form.Group>
                    <Form.Control
                      type="text"
                      value={title}
                      name="title"
                      required
                      onChange={(e) => settitle(e.target.value)}
                      placeholder="Title"
                    />
                  </Form.Group>
                )}
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={thumbnailHeight}
                    name="thumbnailHeight"
                    required
                    disabled={props.art}
                    onChange={(e) => setthumbnailHeight(e.target.value)}
                    placeholder="Height"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={thumbnailWidth}
                    name="thumbnailWidth"
                    required
                    disabled={props.art}
                    onChange={(e) => setthumbnailWidth(e.target.value)}
                    placeholder="Width"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={price}
                    name="price"
                    required
                    onChange={(e) => setprice(e.target.value)}
                    placeholder="Price (€)"
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  {/* {props.art &&
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
                        disabled
                        onClick={() => setconfirmDelete(true)}
                        variant="outline-danger"
                      >
                        Delete
                      </Button>
                    ))} */}
                  {!loading ? (
                    <>
                      {props.art && (
                        <button type="submit" className="btn btn-primary">
                          Update
                        </button>
                      )}
                      {!props.art && (
                        <Button variant="primary" type="submit">
                          Save
                        </Button>
                      )}
                    </>
                  ) : (
                    <Button variant="secondary" disabled>
                      <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={10}
                        width={10}
                      />
                    </Button>
                  )}
                </div>
              </Form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
