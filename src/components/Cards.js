import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import ReactStars from 'react-stars';
import { ThreeDots } from 'react-loader-spinner';
import { moviesRef } from '../firebase/Firebase';

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const querySnapshot = await getDocs(moviesRef);
      const moviesData = [];
      querySnapshot.forEach((doc) => {
        moviesData.push(doc.data());
      });
      setData(moviesData);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {loading ? (
        <div className='w-full flex justify-center items-center min-h-screen  '>
          <ThreeDots height={40} color="white" />
        </div>
      ) : (
        data.map((e, i) => {
          return(
            <div key={i} className='card text-sm font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-5 transition-all duration-500'>
            <img className='h-72' src={e.image} alt='movie-poster' />
            <h1><span className='text-gray-500'>Name:</span> {e.title}</h1>
            <h1 className='flex items-center'>
              <span className='text-gray-500'>Rating:</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false} />
            </h1>
            <h1><span className='text-gray-500'>Year:</span> {e.year}</h1>
          </div>
        )}
      )
    )
      }
    </div>
    )
  }
export default Cards;
