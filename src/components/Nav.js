import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Nav = ({search, setSearch}) => {
  return (
    <nav className='Nav'>
    <form className='searchForm' onSubmit={(e) => {e.preventDefault()}}>
      <label htmlFor='search'>Search Posts</label>
      <input
        id="search"
        type="text"
        placeholder='Search Posts'
        defaultValue={search}
        onChance={(e)=>{setSearch(e.target.value);
        console.log(search.value)}}/>
    </form>
    <ul>
      <li> <Link to='/'>Home</Link></li>
      <li><Link to='/post'>Post</Link></li>
      <li><Link to='/about'>About</Link></li>
    </ul>
    </nav>
  )
}

export default Nav