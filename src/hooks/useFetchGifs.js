import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setGifs(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        gifs,
        isLoading,
    };
};
