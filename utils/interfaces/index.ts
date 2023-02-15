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
}

interface IPeople {
	next: string;
	previous: string;
	results: ICharacter[];
	error?: string;
}

export type { IPeople, ICharacter };
