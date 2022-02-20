import React, { useEffect } from 'react';
import './formStyle.css';
import { useState } from 'react';
import './card.css';
import View from './View';
import { MovieURL } from '../backsrc/back-url';
import {
  Create,
  Delete,
  ReadAllMOVIES,
  Read_SearchResult,
  Update,
} from '../backsrc/urls';
import { toast } from 'react-toastify';


const fetchMovies = (searchValue) => {
  if (searchValue.length > 0)
    return MovieURL.get(Read_SearchResult + '?input=' + searchValue)
      .then((res) => {
        return res.data;
      })
      .catch(() => {
        return {
          body: [],
        };
      });
  else
    return MovieURL.get(ReadAllMOVIES).then((res) => {
      return res.data;
    }).catch(()=>({body:[]}));
};

function Form({ searchValue }) {
  const [movies, setMovies] = useState([]);
  const [layout, setLayout] = useState('grid');

  const getMovies = () =>
    fetchMovies(searchValue).then((res) => {
      console.log(res);
      setMovies(res.body);
    });

  useEffect(() => {
    getMovies();
  }, [searchValue]);

  const [editingMovie, setEditingMovie] = useState(null);
  const [movie, setMovie] = useState({
    id: 123,
    title: '',
    desc: '',
    date: '',
    img: '',
  });

  const submitHandeler = (e) => {
    e.preventDefault();
    if (editingMovie) {
      MovieURL.post(Update, {
        movieID: editingMovie.movieID,
        nameM: movie.title,
        years: movie.date,
        des: movie.desc,
        urlM: movie.img,
      }).then(() => {
        toast.success('Movie edited');
        setEditingMovie(null);
        getMovies();
      });
      setMovie({ id: '', title: '', desc: '', date: '', img: '' });
    } else if (movie?.title && movie?.desc) {
      MovieURL.post(Create, {
        nameM: movie.title,
        years: movie.date,
        des: movie.desc,
        urlM: movie.img,
      }).then(() => {
        toast.success('Movie created');
        getMovies();
      });
      setMovie({ id: '', title: '', desc: '', date: '', img: '' });
      let result = movie;
      return result;
    }
  };
  const changeLayout = () => {
    if (layout === 'grid') setLayout('list');
    else setLayout('grid');
  };
  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };
  const handleEditMovie = (movie) => {
    setMovie({
      id: movie.movieID,
      title: movie.nameM,
      desc: movie.des,
      date: movie.years,
      img: movie.urlM,
    });
    setEditingMovie(movie);
    console.log(movie);
  };

  const handleDelete = (movieID) => {
    MovieURL.post(Delete, {
      movieID,
    }).then(() => {
      toast.success('Movie deleted');
      getMovies();
    });
  };

  return (
    <>
      <div className="total">
        <div className="spn">
          <span> Add Movie</span>
        </div>
        <div className="mid">
          <form>
            <input
              type="text"
              className="box"
              name="date"
              placeholder="Release Year"
              value={movie.date}
              onChange={handleChange}
            />
            <input
              type="text"
              className="box"
              name="title"
              placeholder="Movie Name"
              value={movie.title}
              onChange={handleChange}
            />
            <input
              type="text"
              className="Des"
              name="desc"
              placeholder=" Description"
              value={movie.desc}
              onChange={handleChange}
            />
            <input
              type="text"
              name="img"
              className="imgu"
              placeholder="URL of Movie image"
              value={movie.img}
              onChange={handleChange}
            />
            <input
              type="button"
              name="create"
              className="button"
              value={editingMovie ? 'Edit' : 'Add'}
              onClick={submitHandeler}
            />
          </form>
        </div>
        <i id="view" className="fas" onClick={changeLayout}>
          &#xf009;
        </i>
      </div>
      <div className="midd">
        <View
          layout={layout}
          input={movies}
          onDelete={handleDelete}
          onEdit={handleEditMovie}
        />

    
      </div>
     
    </>
  );
}

export default Form;
