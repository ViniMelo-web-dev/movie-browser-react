import React from 'react'
import { useNavigate } from 'react-router-dom';



const Card = ({movie: {title, vote_average, original_language, release_date, poster_path, id,}, moviePage}) => {
  const navigate = useNavigate();
  const openNewWindow = () => {
    navigate(`/moviepage/${id}`, {state: {moviePage: moviePage}});
}
  return (
    <div className='movie-card relative hovering-dark-bg' onClick={() => openNewWindow(id)}>
      <img className='m-auto w-full rounded-lg'
        src={poster_path ?
          `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-Poster.png'}
        alt={title}
      />
      <h3 className='font-bold mt-3 line-clamp-1 float-left'>{title}</h3>
      <div className='flex justify-start mt-10'>
            <img className='mr-2' src='star.svg' alt='star-icon'></img>

            <p className='font-bold'>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
            <span>•</span>

            <p className='capitalize text-gray-100'>{original_language ? original_language : 'N/A'}</p>

            <span>•</span>

            <p className='text-gray-100'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
      </div>
    </div>
  )
}

export default Card