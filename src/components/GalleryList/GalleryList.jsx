import GalleryItem from "../GalleryItem/GalleryItem";
import React from "react";


function GalleryList({ galleryList, getList }){
    return (
        <div>
            {galleryList.map((item) => (
                <GalleryItem key={item.id} item={item} getList={getList} />
            ))}
        </div>
    )
}

export default GalleryList;