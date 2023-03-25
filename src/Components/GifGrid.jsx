import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";
import GifCard from "./GifCard";

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);

    setGifs(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="cardsContainer">
      <div className="cardsTitle">
        <h3>{category}</h3>
      </div>
      <div className="card-grid" key={category}>
        {gifs.map((gif) => (
          <GifCard key={gif.id} {...gif} />
        ))}
      </div>
    </div>
  );
};
