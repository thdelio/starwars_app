import React from 'react';
import { Image, ImageProps } from 'antd';

const CustomImage: React.FunctionComponent<ImageProps> = ({
	alt = 'image',
	...props
}): React.ReactElement => (
	<Image alt={alt} {...props}>
		{props.children}
	</Image>
);

export default CustomImage;
