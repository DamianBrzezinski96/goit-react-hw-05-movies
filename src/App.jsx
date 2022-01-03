import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "react-loader-spinner";

const NavBar = React.lazy(() => import("./components/NavBar/NavBar"));
const HomePage = React.lazy(() => import("./components/HomePage/HomePage"));
const MovieDetailsPage = React.lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
const Cast = React.lazy(() => import("./components/Cast/Cast"));
const Reviews = React.lazy(() => import("./components/Reviews/Reviews"));
const Movies = React.lazy(() => import("./components/Movies/Movies"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <Loader
            type="Puff"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={3000}
          />
        }>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={
              <>
                <MovieDetailsPage />
              </>
            }
          />
          <Route
            path="/movies/:id/cast"
            element={
              <>
                <MovieDetailsPage />
                <Cast />
              </>
            }
          />
          <Route
            path="/movies/:id/reviews"
            element={
              <>
                <MovieDetailsPage />
                <Reviews />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <Movies />
              </>
            }
          />
          <Route
            path="/movies?query=:query"
            element={
              <>
                <Movies />
              </>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;