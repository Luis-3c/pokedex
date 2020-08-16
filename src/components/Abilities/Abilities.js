import React, { useState, useEffect } from 'react';
import { getAbility } from '../../services/PokeAPI';
import Loader from '../Loader/Loader';

const Abilities = ({ data }) => {
    const [ ability, setAbility ] = useState([]);
    const [loading, setLoading] = useState();

	useEffect(() => {
        setLoading(true);
		data.forEach((d) => {
			getAbility(d.ability.url).then((res) => {
				setAbility(prevData => {
                    return [...prevData, res];
                });
			});
        });
        setLoading(false);
    }, [data]);
    
	return (
		<section className="abilities">
			<h3>Abilities</h3>
			{loading ? <Loader/>
				:ability.map((d) => {
					return (
						<section className="ability" key={d.id}>
							<b>{d.name}</b>
							<p className="desc">{d.effect}</p>
						</section>
					);
				})}
		</section>
	);
};

export default Abilities;
