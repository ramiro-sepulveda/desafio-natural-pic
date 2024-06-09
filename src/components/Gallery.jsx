import { useContext } from "react";
import { PhotosContext } from "../context/ContextFotos";
import { Card } from "react-bootstrap";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { photos, setPhotos } = useContext(PhotosContext);

  const handleLikeToggle = (id) => {
    setPhotos(
      photos.map((el) => (el.id === id ? { ...el, liked: !el.liked } : el))
    );
  };

  return (
    <div className="gallery grid-columns-5 p-3 mx-5">
      {photos.map((el) => (
        <div key={el.id}>
          <Card style={{ position: "relative", width: "22rem", height: "18rem" }}>
            <Card.Img
              variant="top"
              src={el.src.large}
              style={{ height: "100%", objectFit: "cover" }}
            />
            <div
              onClick={() => handleLikeToggle(el.id)}
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "10px",
                right: "10px",
                color: "white",
              }}
            >
              <IconHeart filled={el.liked} />
            </div>
            <Card.Body
              className="p-1"
              style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                color: "white",
                textAlign: "center",
              }}
            >
              <Card.Text className="outline-text">{el.alt}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
