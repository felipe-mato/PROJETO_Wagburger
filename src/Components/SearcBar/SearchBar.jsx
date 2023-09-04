import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../api/fetchProducts';


export default function SearchBar() {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async () => {
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
  };

  return (
    <form className="search-bar">
      <input 
        type="search"
        value = {searchValue}
        placeholder="Buscar produto"
        className="search__input"
        onChange={ ({target}) =>
          setSearchValue(target.value)}
        required
      />
      <button
        type="submit"
        className="search__button"
        onClick={ handleSearch }
      >
        <BsSearch />
      </button>
    </form>
  );
}
