import React from 'react';
import {Button} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MovieSearch = (props) => {
	return (
		<div className='mt-4 mb-4'>
			<input
				type="text"
                id="input del buscador de películas"
                className='col col-sm-6'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Título de película o serie'
			></input>
            <Button color="secondary"><FontAwesomeIcon icon={faSearch} /></Button>{' '}
		</div>
	);
};

export default MovieSearch;