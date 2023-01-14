import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {
  const [galleryList, setList] = useState([]);

  useEffect(() => {
    getList()
  }, [])

  const getList = () => {
    axios.get('/gallery')
      .then(response => {
        console.log("This is the response", response.data)
        setList(response.data)
      })
      .catch(err => {
        alert('error in GET: getlist');
        console.log(err);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of Puppies</h1>
        </header>
        <GalleryList galleryList={galleryList} setList={setList}/>
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
