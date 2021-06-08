import React, { useState } from 'react';
import { Container, Title, Description, CheckBox } from './styles';

const Task: React.FC = () => {
	const [checked, setChecked] = useState(false);

	return (
		<Container>
			<Title>Tarefa 01</Title>
			<Description>Dercrição da tarefa 01</Description>
			<CheckBox
				value={checked} onChange={() => setChecked(!checked)}
			/>
		</Container>
	)
};

export default Task;
