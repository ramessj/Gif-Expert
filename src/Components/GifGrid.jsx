import { useEffect } from "react";
import { getGifs } from "../Helpers/getGifs";

export const GifGrid = ({category}) => {

    

    useEffect( () => {
        getGifs({category});

    }, []);



    return (
        <>
            <h3>{category}</h3>
            
            
        </>
)};

