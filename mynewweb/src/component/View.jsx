import React from 'react';
import './gride.css';
import './list.css';
import MovieCard from './MovieCard';

const View = (props) => {
  return (
    <>
      <div className={`grid-container${props.layout === 'grid' ? '' : '2'}`}>
        {props.input.map((myMov, id) => (
          <div className={`grid-item${props.layout === 'grid' ? '' : '2'}`}>
            <MovieCard
              layout={props.layout}
              key={id}
              mov={myMov}
              onDelete={() => props.onDelete(myMov.movieID)}
              onEdit={() => props.onEdit(myMov)}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default View;
