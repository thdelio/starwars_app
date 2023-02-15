import { OptionProps } from 'antd/lib/mentions';
import React from 'react';
import { Select } from 'antd';

const CustomOption: React.FunctionComponent<OptionProps> = ({
	...props
}): React.ReactElement => (
	<Select.Option {...props}>{props.children}</Select.Option>
);

export default CustomOption;
