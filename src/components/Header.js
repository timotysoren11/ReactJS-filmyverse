import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
//Creating Link to AddMovies
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='sticky z-10 top-0 header text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'}><span>Filmy<span className='text-white'>Verse</span></span></Link>
      <Link to={'/addmovie'}><h1 className='text-lg flex items-center cursor-pointer'>
        <Button className='text-white'><AddIcon className='mr-2' color='secondary'/><span className='text-white'>Add New</span></Button></h1></Link>
    </div>
  )
}

export default Header
 