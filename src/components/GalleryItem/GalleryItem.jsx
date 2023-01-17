import React, { useState } from 'react';
import axios from 'axios';

function GalleryItem({ item, getList }) {

    const [likes, setLikes] = useState(item.likes);
    const [isHover, setIsHover] = useState(false);

    const toggleHover = () => {
        setIsHover(!isHover);
    }


    const likeButton = (id) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${id}`
          }).then((response) => {
            setLikes(likes + 1);
            getList();
          }).catch((error) => {
            console.log('likeButton() sure broke:', error);
          })
    }



    if (isHover === false) {
        return (
        
            <ul>
                <div key={item.id}>
                    <img onClick={toggleHover} src={item.path} width="300" height="300"></img>
                    <button onClick={() => likeButton(item.id)}>💕</button>
                    <h2>{item.likes} people like this!</h2>
                </div>
            </ul>
          
        )
    } else {
        return (
            
            <ul>
                <div key={item.id}>
                    <p onClick={toggleHover}>{item.description}</p>
                    <button onClick={() => likeButton(item.id)}>💕</button>
                    <h2>{item.likes} people like this!</h2>
                </div>
            </ul>

        )
    }
}

export default GalleryItem;