import React, { useEffect, useState } from 'react'
import axios from 'axios';


function Search() {
    const [search, setSearch] = useState([])

    useEffect(() => {
        axios
          .get(`https://api.rawg.io/api/games/${search}?key=70463790c4684c86abe6ae46eab1c5b1`)
          .then(response => {
            setSearch(response.data);
          });
      }, [search]);
      const getSearch  = (str) => {
        setSearch(str)
      }
      const handlesearch = (e) => {
        e.preventDefault();
        getSearch(e.target.value)
      }
  return (
    <>
    <form class="d-flex" role="search">
        <input class="form-control me-2" type="search"  onSubmit={handlesearch} placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light"  type="submit">Search</button>
      </form>
    </>
  )
}

export default Search