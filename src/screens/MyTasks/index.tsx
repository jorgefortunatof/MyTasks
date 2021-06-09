import React, { useCallback, useState } from "react";
import Task from "../../components/Task";

import { Container, Title, PlusIcon, FloatButton, TaskList } from "./styles";
import TaskModal from "../../components/TaskModal";
import { ListRenderItem } from "react-native";
import { useTasks } from "../../hooks/tasks";
import TaskType from "../../types/TaskType";

const MyTask: React.FC = () => {
	const { tasks } = useTasks();

	const [showModal, setShowModal] = useState(false);
	const [taskSelected, setTaskSelected] = useState({} as TaskType);

	const toggleEditTask = useCallback(
		(task) => {
			setTaskSelected(task);
			setShowModal(true);
		},
		[setTaskSelected, setShowModal]
	);

	const renderItem: ListRenderItem<TaskType> = useCallback(
		({ item }) => <Task data={item} toggleEdit={toggleEditTask} />,
		[toggleEditTask]
	);

	return (
		<>
			<Container>
				<Title>Minhas tarefas</Title>
				<TaskList
					keyExtractor={(task) => task.id}
					data={tasks}
					renderItem={renderItem}
				/>
			</Container>

			<TaskModal
				taskSelected={taskSelected}
				visible={showModal}
				closeModal={() => {
					setShowModal(false);
					setTaskSelected({} as TaskType);
				}}
			/>
			<FloatButton onPress={() => setShowModal(true)}>
				<PlusIcon />
			</FloatButton>
		</>
	);
};

export default MyTask;
