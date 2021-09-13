import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

const MovieList = (props) => {

    return (
        <div>
          {props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
				</div>
			))}  
        </div>
    );
}
export default MovieList;