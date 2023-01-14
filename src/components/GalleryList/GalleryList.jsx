import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList }){

    return (
        <>
        <ul>
            {galleryList.map((image) => (
                <div>
                    <img src={image.path} width="300" height="300"></img>
                    <button>💕</button>
                    <h2>{image.likes} people like this!</h2>
                </div>
                // <GalleryItem image={image.path} key={image.id} />
            ))}
        </ul>
        </>
    )
}

export default GalleryList;