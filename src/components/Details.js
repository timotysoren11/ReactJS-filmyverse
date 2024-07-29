import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom'
import { moviesRef } from '../firebase/Firebase';
import { getDoc } from 'firebase/firestore';

const Details = () => {
  const {id} = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: ""
});

  useEffect(() =>{
    async function getData(){
      const _data = await getDoc(moviesRef, id);
      setData(_data.data())
    }
    getData();
  },[])
  
  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
      <img className='h-96' src={data.image} alt='civil-war' />
      <div className='ml-4 w-1/2'>
        <h1 className='text-3xl font-bold text-gray-400'>{data.title}<span>({data.year})</span></h1>
        <ReactStars
          size={20}
          half={true}
          value={5}
          edit={false}
        />
        <p className='mt-3'>{data.description}</p>
      </div>
      
    </div>
  )
}

export default Details
