import { Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CustomRow from '../../components/antDesing/CustomRow';
import ShowCustomMessage from '../../components/Messages/ShowCustomMessage';
import { getApiResults } from '../../utils/APIs';
import { showNotification } from '../../utils/functions';
import { IFilm, IRespond } from '../../utils/interfaces';

const Presentation = (): React.ReactElement => {
	const router = useRouter();
	const { movie } = router.query;
	const [exist, setExist] = useState<boolean>();
	const [film, setFilm] = useState<IFilm>();

	useEffect(() => {
		getMovie(movie);
	}, [movie]);

	const getMovie = async (name: string | string[]) => {
		const response: IRespond = await getApiResults(
			`https://swapi.dev/api/films/?search=${name}`
		);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}

		const films: IFilm = response.results.find(
			(person) => person.title == movie
		);

		if (response?.results.length) {
			if (films) {
				setFilm(films);
				setExist(true);
				return;
			}
			setExist(false);
		}
	};

	return (
		<div>
			{exist === false ? (
				<ShowCustomMessage notFound />
			) : exist ? (
				<div>
					<div className='fade'></div>
					<section className='intro'>
						A long time ago, in a galaxy far, far away....
					</section>

					<section className='star-wars'>
						<div className='crawl'>
							<div className='title'>
								<p>Episode {film?.episode_id}</p>
								<h1>{film?.title}</h1>
							</div>

							<p>{film?.opening_crawl}</p>
						</div>
					</section>
				</div>
			) : (
				<CustomRow justify={'center'}>
					<Spin spinning size='large' />
				</CustomRow>
			)}
		</div>
	);
};

export default Presentation;
