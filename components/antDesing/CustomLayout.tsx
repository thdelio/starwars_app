import React from 'react';
import { Layout } from 'antd';
import { LayoutProps } from 'antd/lib/layout';

export type CustomLayoutProps = LayoutProps & {
	className?: string;
	style?: React.CSSProperties;
};

const CustomLayout: React.FunctionComponent<CustomLayoutProps> = ({
	style = { height: '100%' },
	...props
}): React.ReactElement => (
	<Layout style={style} {...props}>
		{props.children}
	</Layout>
);

export default CustomLayout;
