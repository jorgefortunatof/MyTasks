import React, { useCallback, useState } from "react";
import Task from "../../components/Task";
import TaskCounter from "../../components/TaskCounter";
import TaskFilter from "../../components/TaskFilter";
import TaskModal from "../../components/TaskModal";
import TaskType from "../../types/TaskType";

import { useTasks } from "../../hooks/tasks";
import { ListRenderItem } from "react-native";

import {
	Container,
	Title,
	PlusIcon,
	FloatButton,
	TaskList,
	FilterAndCounterContainer,
	NoTasksContainer,
	NoTasksTitle,
	NoTasksIcon,
} from "./styles";

const MyTask: React.FC = () => {
	const { filteredTasks, tasks } = useTasks();

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

				<FilterAndCounterContainer>
					<TaskCounter />
					<TaskFilter />
				</FilterAndCounterContainer>

				{tasks.length ? (
					<TaskList
						keyExtractor={(task) => String(task.id)}
						data={filteredTasks}
						renderItem={renderItem}
					/>
				) : (
					<NoTasksContainer>
						<NoTasksIcon />
						<NoTasksTitle>
							{`Você ainda não possui tarefas!\nclique no botão abaixo para adicionar sua primeira tarefa.`}
						</NoTasksTitle>
					</NoTasksContainer>
				)}
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
