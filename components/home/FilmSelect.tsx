import { Select } from 'antd';
import React, {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { getApiResults } from '../../utils/APIs';
import { showNotification } from '../../utils/functions';
import { ICharacter, IFilm, IRespond } from '../../utils/interfaces';
import CustomCol from '../antDesing/CustomCol';
import CustomFormItem from '../antDesing/CustomFormItem';
import CustomRow from '../antDesing/CustomRow';

interface IProps {
	setPeople: Dispatch<SetStateAction<IRespond>>;
	setCharacters: Dispatch<SetStateAction<ICharacter[]>>;
	getAllPeople: (data) => void;
}

const FilmSelect: FC<IProps> = ({
	setPeople,
	setCharacters,
	getAllPeople,
}): React.ReactElement => {
	const [films, setFilms] = useState<IFilm[]>();

	const getCharacters = async (characters: string[]) => {
		const people: ICharacter[] = [];

		for await (const character of characters) {
			const response: ICharacter = await getApiResults(character);

			if (response.error) {
				showNotification({
					message: response.error,
					type: 'error',
				});
				return;
			}

			setPeople(null);
			people.push(response);
		}

		setCharacters(people);
	};

	const getFilms = async () => {
		const response: IRespond = await getApiResults(
			'https://swapi.dev/api/films/'
		);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}
		setFilms(response.results);
	};

	useEffect(() => {
		getFilms();
	}, []);

	return (
		<CustomRow justify={'center'}>
			<CustomCol xs={24} md={16} lg={12}>
				<CustomFormItem label={<strong id='text'>Movies</strong>}>
					<Select
						placeholder='Movies'
						onChange={async (value) => {
							if (value) {
								setCharacters(null);
								setPeople(null);
								const find = films?.find((film) => film.episode_id == value);
								console.log({ find: find });
								await getCharacters(find?.characters);
								return;
							}
							await getAllPeople('https://swapi.dev/api/people/');
						}}
					>
						{films?.map((film) => (
							<Select.Option
								value={film.episode_id.toString()}
								key={film.episode_id}
							>
								{film.title}
							</Select.Option>
						))}
					</Select>
				</CustomFormItem>
			</CustomCol>
		</CustomRow>
	);
};

export default FilmSelect;
