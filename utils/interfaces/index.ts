interface ICharacter {
	birth_year: string;
	created: string;
	edited: string;
	eye_color: string;
	films: string[];
	gender: string;
	hair_color: string;
	height: string;
	homeworld: string;
	mass: string;
	name: string;
	skin_color: string;
	species: string[];
	starships: string[];
	url: string;
	vehicles: string[];
	error?: string;
}

interface IFilm {
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: string[];
	planets: string[];
	starships: string[];
	vehicles: string[];
	species: string[];
	created: string;
	edited: string;
	url: string;
	error?: string;
}

interface IPlanets {
	climate: string;
	created: string;
	diameter: string;
	edited: string;
	films: string[];
	gravity: number;
	name: string;
	orbital_period: number;
	population: number;
	residents: string[];
	rotation_period: number;
	surface_water: number;
	terrain: string;
	url: string;
	error?: string;
}

interface IRespond {
	next: string;
	previous: string;
	results: any[];
	error?: string;
}

export type { IRespond, ICharacter, IFilm, IPlanets };
