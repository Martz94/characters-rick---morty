import React,{useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Pagination from './components/Pagination';
import Footer from './components/Footer'


function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo ] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(Response => Response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  }

  const onNext = () => {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
    <body className="bg-dark">
      <Navbar brand={"Rick & Morty Characters"}></Navbar>
      <div className="container">
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
        <Characters characters={characters}></Characters>
        <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}></Pagination>
      </div>
    </body>
    <Footer footer={"By Rick & Morty API/Open Source"}></Footer>
    </>
  );
}

export default App;
