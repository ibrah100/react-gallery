import GalleryItem from "../GalleryItem/GalleryItem";
import { useState, React } from "react";
import axios from 'axios';

function GalleryList({ galleryList, getList }){
    
    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    }

    const likeButton = (id) => {
        axios({
            method: 'PUT',
            url: `/like/${id}`
          }).then((response) => {
            getList();
          }).catch((error) => {
            console.log('likeButton() sure broke:', error);
          })
    }

    if (isHover === false) {
        return (
            <>
            <ul>
                {galleryList.map((image) => (
                    <div key={image.id}>
                        <img onClick={toggleHover} src={image.path} width="300" height="300"></img>
                        <button onClick={() => likeButton(image.id)}>💕</button>
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
                    <div key={image.id}>
                        <p onClick={toggleHover}>{image.description}</p>
                        <button onClick={() => likeButton(image.id)}>💕</button>
                        <h2>{image.likes} people like this!</h2>
                    </div>
                    // <GalleryItem image={image.path} key={image.id} />
                ))}
            </ul>
        )
    }
}

export default GalleryList;