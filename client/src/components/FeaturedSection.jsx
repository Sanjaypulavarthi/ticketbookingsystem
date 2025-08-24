import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurCircle from './BlurCircle';
import MovieCard from './MovieCard';
import { useAppContext } from '../context/AppContext';

const FeaturedSection = () => {
  const navigate = useNavigate();
  const {shows}=useAppContext()

  return (
    <div>
      <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-visible'>
        <div className='relative flex items-center justify-between pt-20 pb-10'>
          {/* BlurCircle may overlap – ensure it has lower z-index */}
          <BlurCircle top="-3px" right="-90px" className="z-0" />

          <p className='text-gray-300 font-medium text-lg'>Now Showing</p>

          <button
            type="button"
            onClick={() => {
              console.log('Clicked View All');
              navigate('/movies');
            }}
            className='relative z-10 group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'
          >
            View All
            <ArrowRight className='group-hover:translate-x-0.5 transition w-4 h-4' />
          </button>
        </div>

        <div className='flex flex-wrap gap-8 mt-8 max-sm:justify-center'> 
          {shows.slice(0,4).map((show)=>(
            <MovieCard key={show._id} movie={show} />
          ))}
        </div>

        <div className='flex justify-center mt-20'>
          <button
            type="button"
            onClick={() => {
              navigate('/movies');
              scrollTo(0, 0);
            }}
            className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
