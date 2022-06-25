import React from "react";
import Movie from "../movieCard";
import Grid from "@material-ui/core/Grid";

const MovieList = ( {movies, action }) => {
    return movies.map((m) => (
      <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Movie key={m.id} movie={m} action={action}/>
      </Grid>
  ));
};

export default MovieList;