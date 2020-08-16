const ENDPOINT = 'https://pokeapi.co/api/v2/';

export function getPokemon(key) {
    return fetch(ENDPOINT + `pokemon/${key}`)
    .then((response) => response.json()
        .then((res) => {
			const { name, abilities, height, weight, id, types } = res;
			const { front_default } = res.sprites.other.dream_world;
			return { name, abilities, height, weight, id, types, front_default };
        })
        .catch(() => {
            if (response.status === 404) return 'Pokemon not found';
        })
	);
}

export function getAbility(url) {
	return fetch(url).then((response) => response.json()).then((res) => {
		const { effect } = res.effect_entries[1];
		const { name, id } = res;
		return { effect, name, id };
	});
}

export function getCount(){
	return fetch(ENDPOINT + 'pokemon/')
		.then(response=> response.json())
		.then(res => {
			const {count} = res;
			return count;
		})
}
