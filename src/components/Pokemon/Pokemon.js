import React from 'react';
import './Pokemon.css';
import Abilities from '../Abilities/Abilities';

const Pokemon = ({ pokemon }) => {
	return (
		<div className="pokemon-card">
			<section className="header">
				<img
					className="image"
					src={pokemon.front_default}
					alt={pokemon.name}
					title={pokemon.name}
				/>
			</section>
			<section className="body">
				<h2 className="name">{pokemon.name}</h2>

				<div className="info">
					<div className="info-item item-border">Height</div>
					<div className="info-item item-border">Weight</div>
					<div className="info-item">Id</div>
				</div>
				<div className="info">
					<div className="info-item item-border">{pokemon.height}</div>
					<div className="info-item item-border">{pokemon.weight}</div>
					<div className="info-item">{pokemon.id}</div>
				</div>
			</section>
			<Abilities data={pokemon.abilities}/>
			<section className="types">
				<h3>Types</h3>
				{pokemon.types.map(t=>{
					return(
						<ul key={t.type.url}>
							<li>{t.type.name}</li>
						</ul>
					)
				})}
			</section>
		</div>
	);
};

export default Pokemon;
