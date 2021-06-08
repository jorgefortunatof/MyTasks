import React from 'react';
import Task from '../../components/Task';
import { Container, Title } from './styles';

const MyTask: React.FC = () => {
	return (
		<Container>
			<Title>Minhas tarefas</Title>

			<Task />
			<Task />
			<Task />
			<Task />

		</Container>
	)
}

export default MyTask;
