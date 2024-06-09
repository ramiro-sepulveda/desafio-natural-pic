import { createContext, useState, useEffect } from "react";

export const PhotosContext = createContext();

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    photosApi();
  }, []);

  const photosApi = async () => {
    const response = await fetch("./photos.json");
    const data = await response.json();

    setPhotos(data.photos);
  };

  return (
    <PhotosContext.Provider value={{photos, setPhotos }}>
      {children}
    </PhotosContext.Provider>
  );
};
export default PhotosProvider;
