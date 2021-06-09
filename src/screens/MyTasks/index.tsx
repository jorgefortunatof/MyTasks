import React, { useCallback, useState } from "react";
import Task from "../../components/Task";
import TaskCounter from "../../components/TaskCounter";
import TaskModal from "../../components/TaskModal";
import TaskType from "../../types/TaskType";

import { useTasks } from "../../hooks/tasks";
import { ListRenderItem } from "react-native";

import { Container, Title, PlusIcon, FloatButton, TaskList } from "./styles";

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
				<Title>Minhas tarefas.</Title>

				<TaskCounter />

				<TaskList
					keyExtractor={(task) => String(task.id)}
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
