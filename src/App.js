
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import {
  fetchGenres,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [top, latest, allSongs, allGenres] =
        await Promise.all([
          fetchTopAlbums(),
          fetchNewAlbums(),
          fetchSongs(),
          fetchGenres(),
        ]);

      setTopAlbums(top);
      setNewAlbums(latest);
      setSongs(allSongs);
      setGenres(allGenres);
    };

    loadData();
  }, []);

  const searchData = [...topAlbums, ...newAlbums];

  return (
    <>
      <Navbar searchData={searchData} />
      <Hero />

      <Section
        title="Top Albums"
        data={topAlbums}
        type="album"
      />

      <Section
        title="New Albums"
        data={newAlbums}
        type="album"
      />

      <Section
        title="Songs"
        data={songs}
        type="song"
        filters={genres}
      />
    </>
  );
}

export default App;
