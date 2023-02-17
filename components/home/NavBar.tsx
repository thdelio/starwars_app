import { AutoComplete, Input } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CustomCol from '../antDesing/CustomCol';
import CustomImage from '../antDesing/CustomImage';
import CustomRow from '../antDesing/CustomRow';

const NavBar = (): React.ReactElement => {
	const router = useRouter();

	const [searchValue, setSearchValue] = useState<string>();

	const options = [
		{
			label: searchValue,
			value: searchValue,
			key: 'search',
		},
	];

	useEffect(() => {
		setSearchValue(localStorage.getItem('searchValue'));
	}, []);

	return (
		<header>
			<CustomRow align={'middle'}>
				<CustomCol md={12}>
					<CustomRow justify={'start'}>
						<CustomImage
							src={'https://i.ibb.co/6rKfJ9R/Logo.webp'}
							preview={false}
							width={60}
							onClick={() => router.push('/')}
						/>
					</CustomRow>
				</CustomCol>
				<CustomCol xs={12}>
					<CustomRow justify={'end'}>
						<ul>
							<AutoComplete style={{ width: 250 }} options={options} autoFocus>
								<Input.Search
									onSearch={(value) => {
										router.push(`/?search=${value}`);
										localStorage.setItem('searchValue', value);
										setSearchValue(value);
									}}
								/>
							</AutoComplete>
						</ul>
					</CustomRow>
				</CustomCol>
			</CustomRow>
		</header>
	);
};

export default NavBar;
