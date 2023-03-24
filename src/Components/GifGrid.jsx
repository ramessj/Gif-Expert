import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const GifGrid = ({category}) => {

    const [gifs, setGifs] = useState([]);



    useEffect( () => {
       
              
       
       getGifs(category)
            .then (newImages => setGifs(newImages));
       
       
                    

    }, []);



    return (
        <div className="cardsContainer">
            
            <div className="cardsTitle">
            <h3>{category}</h3>

            </div>
            <div className="card-grid">
                {gifs.map( gif => (
                    <div key={gif.id} className="card">
                    
                    <img src={gif.url} alt={gif.title} />

                    
                    <p >{gif.title}</p>
                    </div>)
                        
                )}
            </div>
            
            
        </div>
)};

