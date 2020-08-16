import React, { useState } from 'react';
import {useLocation, Link} from 'wouter';
import './Navbar.css';

const Navbar = () => {
	const [key, setKey] = useState();
	const [,setLocation] = useLocation();

    function handleSubmit(e){
        e.preventDefault();
        setLocation(`/pokemon/${key}`)
    }

    function handleChange(e){
        setKey(e.target.value);
    }
	return (
		<div className="nav">
			<div className="logo">
				<h2>
					<Link to="/" style={{textDecoration: 'none', color: 'black'}}>
						Pokedex
					</Link>
				</h2>
			</div>
				<form className="searcher" onSubmit={handleSubmit}>
					<input type="text" placeholder="Search" onChange={handleChange} />
					<button className="btn-search" type="submit">
						<i className="fa fa-search" aria-hidden="true" />
					</button>
				</form>
		</div>
	);
};

export default Navbar;
