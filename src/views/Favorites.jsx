import { useContext } from "react";
import { PhotosContext } from "../context/ContextFotos";
import { Card } from "react-bootstrap";

const Favorites = () => {
  const { photos } = useContext(PhotosContext);

  return (
    <>
      <div className="App">
        <h1>Fotos Favoritas</h1>
      </div>
      <div className="gallery grid-columns-4 p-3 mx-5">
        {photos.map((el) =>
          el.liked === true ? (
            <div key={el.id}>
              <Card style={{ position: "relative", width: "26rem", height: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={el.src.large}
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </Card>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};
export default Favorites;
