import React, { useCallback, useEffect, useState } from "react";
import { useTasks } from "../../hooks/tasks";

import { Container, Title, TasksNumber, Box } from "./styles";

const TaskCounter: React.FC = () => {
	const { tasks } = useTasks();

	const [completed, setCompleted] = useState(0);
	const [uncompleted, setUncompleted] = useState(0);

	const getCounts = useCallback(() => {
		const completedTasks = tasks.filter((task) => task.completed);
		return completedTasks.length;
	}, []);

	useEffect(() => {
		const completedTasks = tasks.filter((task) => task.completed);

		const completedCount = completedTasks.length;
		const uncompletedCount = tasks.length - completedCount;

		setCompleted(completedCount);
		setUncompleted(uncompletedCount);
	});

	return (
		<Container>
			<Box>
				<Title>Total</Title>
				<TasksNumber>{tasks.length}</TasksNumber>
			</Box>
			<Box>
				<Title>Executadas</Title>
				<TasksNumber>{completed}</TasksNumber>
			</Box>

			<Box>
				<Title>Não Executadas</Title>
				<TasksNumber>{uncompleted}</TasksNumber>
			</Box>
		</Container>
	);
};

export default TaskCounter;
