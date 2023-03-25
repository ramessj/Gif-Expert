import { useState } from "react"

const GifCard = ({title, url}) => {

    const [titleName, setTitleName] = useState(title);

    const checkTitle = () => {
        if(titleName == ''){
            setTitleName('GIF');
        }
    }

    checkTitle();


    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{titleName}</p>
        </div>
    )
}

export default GifCard