import { Divider, Form, Input, Spin, Table } from 'antd';
import Title from 'antd/lib/typography/Title';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CustomCard from '../../components/antDesing/CustomCard';
import CustomCol from '../../components/antDesing/CustomCol';
import CustomContent from '../../components/antDesing/CustomContent';
import CustomFormItem from '../../components/antDesing/CustomFormItem';
import CustomRow from '../../components/antDesing/CustomRow';
import ShowCustomMessage from '../../components/Messages/ShowCustomMessage';

import { getApiResults } from '../../utils/APIs';
import { showNotification } from '../../utils/functions';
import { ICharacter, IFilm, IPlanets, IRespond } from '../../utils/interfaces';

const Character = (): React.ReactElement => {
	const router = useRouter();
	const [form] = Form.useForm();
	const { name } = router.query;
	const [exist, setExist] = useState<boolean>();
	const [movies, setMovies] = useState<IFilm[]>();

	const columns = [
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title',
			render: (record) => <Link href={`/Movies/${record}`}>{record}</Link>,
		},
		{
			title: 'Director',
			dataIndex: 'director',
			key: 'director',
		},
		{
			title: 'Producer',
			dataIndex: 'producer',
			key: 'producer',
		},
		{
			title: 'Release Date',
			dataIndex: 'release_date',
			key: 'release_date',
		},
	];

	useEffect(() => {
		const getCharacters = async (name: string | string[]) => {
			const response: IRespond = await getApiResults(
				`https://swapi.dev/api/people/?search=${name}`
			);

			if (response.error) {
				showNotification({
					message: response.error,
					type: 'error',
				});
				return;
			}

			const character: ICharacter = response.results.find(
				(person) => person.name == name
			);

			if (response?.results.length) {
				if (character) {
					const films: IFilm[] = [];
					const planet: IPlanets = await getHomeWorld(character?.homeworld);

					form.setFieldsValue({
						...character,
						edited: dayjs(character?.edited).format('MM/DD/YYYY'),
						homeworld: planet?.name,
					});
					if (character.films) {
						for await (const film of character.films) {
							const response = await getFilms(film);
							films.push(response);
						}
					}

					setMovies(films);
					setExist(true);
					return;
				}
				setExist(false);
			}
		};

		getCharacters(name);
	}, [name, form]);

	const getFilms = async (API: string) => {
		const response = await getApiResults(API);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}

		return response;
	};

	const getHomeWorld = async (API: string) => {
		const response = await getApiResults(API);

		if (response.error) {
			showNotification({
				message: response.error,
				type: 'error',
			});
			return;
		}

		return response;
	};

	const caption = (
		<CustomRow justify={'start'}>
			<Title level={4}>Films</Title>
		</CustomRow>
	);

	return (
		<CustomContent style={{ padding: 50 }}>
			<Form form={form}>
				{exist === false ? (
					<ShowCustomMessage notResult />
				) : exist ? (
					<CustomCard>
						<CustomRow justify={'center'}>
							<Divider>
								<Title level={3}>{name}</Title>
							</Divider>
						</CustomRow>

						<CustomRow justify={'center'} gutter={24}>
							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='gender' label='Gender'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>

							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='skin_color' label='Skin Color'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>

							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='birth_year' label='Birth Year'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>

							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='height' label='Height'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>

							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='homeworld' label='Home World'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>

							<CustomCol xs={24} md={12} lg={8}>
								<CustomFormItem name='edited' label='Last Time Modified'>
									<Input readOnly />
								</CustomFormItem>
							</CustomCol>
						</CustomRow>

						<Table
							style={{ paddingTop: 25 }}
							title={() => caption}
							dataSource={movies}
							loading={!movies}
							columns={columns}
							scroll={{ x: 'calc(700px + 50%)', y: 240 }}
							rowKey={(record) => record.episode_id}
						/>
					</CustomCard>
				) : (
					<CustomRow justify={'center'}>
						<Spin spinning size='large' />
					</CustomRow>
				)}
			</Form>
		</CustomContent>
	);
};

export default Character;
