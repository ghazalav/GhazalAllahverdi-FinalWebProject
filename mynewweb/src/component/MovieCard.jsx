import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const MovieCard = (props) => {
  if (!props.mov) return '';
  return (
    <Link to={'/movieInfo/' + props.mov.movieID}>
      <div className="card">
        <div className="title">
          <span>
            <b>{props.mov.nameM}</b>
          </span>
        </div>
        <div className="year">
          <span>({props.mov.years})</span>
        </div>
        <div className="image">
          <img src={props.mov.urlM} alt={props.mov.nameM} className="imgM" />
        </div>
        <i class="fas" id="edit" onClick={(e)=>{e.stopPropagation();e.preventDefault();props.onEdit()}}>
          &#xf044;
        </i>
        <i class="fa" id="delete" onClick={(e)=>{e.stopPropagation();e.preventDefault();props.onDelete()}}>
          &#xf014;
        </i>
      </div>
    </Link>
  );
};
export default MovieCard;
