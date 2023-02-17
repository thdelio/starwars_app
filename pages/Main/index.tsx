import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CustomContent from '../../components/antDesing/CustomContent';
import MainPage from '../../components/home/MainPage';
import { getApiResults } from '../../utils/APIs';
import { showNotification } from '../../utils/functions';
import { ICharacter, IRespond } from '../../utils/interfaces';

const Main = (): React.ReactElement => {
	const [people, setPeople] = useState<IRespond>();
	const [characters, setCharacters] = useState<ICharacter[]>();
	const router = useRouter();
	const { search } = router.query;

	const getPeople = async (API) => {
		const response: IRespond = await getApiResults(API);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}
		setPeople(response);
		setCharacters(response.results);
	};

	useEffect(() => {
		if (search) {
			getPeople(`https://swapi.dev/api/people/?search=${search}`);
		} else {
			getPeople('https://swapi.dev/api/people/');
		}
	}, [search]);

	return (
		<CustomContent style={{ padding: 50 }}>
			<MainPage
				people={people}
				setPeople={setPeople}
				setCharacters={setCharacters}
				characters={characters}
				getAllPeople={getPeople}
			/>
		</CustomContent>
	);
};

export default Main;
