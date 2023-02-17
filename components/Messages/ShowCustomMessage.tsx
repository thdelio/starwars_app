import Title from 'antd/lib/typography/Title';
import React, { FC } from 'react';
import CustomContent from '../antDesing/CustomContent';
import CustomImage from '../antDesing/CustomImage';
import CustomRow from '../antDesing/CustomRow';

interface IProps {
	notFound?: boolean;
	notResult?: boolean;
	plural?: boolean;
}

const ShowCustomMessage: FC<IProps> = ({ notFound, notResult, plural }) => {
	return (
		<CustomContent style={{ padding: 50 }}>
			<CustomRow justify={'center'}>
				<CustomImage
					src={
						notFound
							? 'https://i.ibb.co/k4G91XZ/custom.webp'
							: notResult &&
							  'https://i.ibb.co/h2CbP8R/ei-1625480980066-removebg-preview.webp'
					}
					width={250}
					preview={false}
				/>
			</CustomRow>
			<CustomRow justify={'center'}>
				<Title level={4} id={'text'}>
					{notFound
						? 'THE PAGE THAT YOU ARE LOOKING FOR, IS NOT FOUND ! '
						: notResult &&
						  `THE CHARACTER${
								plural ? 'S' : ''
						  } YOU ARE LOOKING FOR, IS NOT FOUND ! `}
				</Title>
			</CustomRow>
		</CustomContent>
	);
};

export default ShowCustomMessage;
