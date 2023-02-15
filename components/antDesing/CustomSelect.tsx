import React, { useContext } from 'react';
import Select, { SelectProps } from 'antd/lib/select';

const CustomSelect: React.FunctionComponent<SelectProps<any>> = ({
	style = { width: '100%', color: '#000' },
	placeholder = 'Seleccione',
	disabled = false,
	...props
}): React.ReactElement => {
	return (
		<Select
			style={style}
			placeholder={placeholder}
			showSearch
			allowClear
			filterOption={(input, option) =>
				option?.children
					?.toString()
					?.toLowerCase()
					?.indexOf(input?.toLowerCase()) >= 0
			}
			{...props}
		>
			{props.children}
		</Select>
	);
};

export default CustomSelect;
