import './App.css';
import Header from './component/Header';
import Center from './component/Center';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieInfo from './component/MovieInfo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movieInfo/:movieID" element={<MovieInfo />} />
        <Route
          path=""
          element={
            <div className="App">
              <Header />
              <Center />
              <ToastContainer />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
