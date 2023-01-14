import GalleryItem from "../GalleryItem/GalleryItem";
import { useState } from "react";

function GalleryList({ galleryList }){
    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    }

    if (isHover === false) {
        return (
            <>
            <ul>
                {galleryList.map((image) => (
                    <div>
                        <img onClick={toggleHover} src={image.path} width="300" height="300"></img>
                        <button>💕</button>
                        <h2>{image.likes} people like this!</h2>
                    </div>
                    // <GalleryItem image={image.path} key={image.id} />
                ))}
            </ul>
            </>
        )
    } else {
        return (
            <ul>
                {galleryList.map((image) => (
                    <div>
                        <p onClick={toggleHover}>{image.description}</p>
                        <button>💕</button>
                        <h2>{image.likes} people like this!</h2>
                    </div>
                    // <GalleryItem image={image.path} key={image.id} />
                ))}
            </ul>
        )
    }
}

export default GalleryList;