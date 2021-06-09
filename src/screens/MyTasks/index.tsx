import React, { useState } from "react";
import Task from "../../components/Task";

import { Container, Title, PlusIcon, FloatButton, TaskList } from "./styles";
import TaskModal from "../../components/TaskModal";
import { ListRenderItem } from "react-native";

let tasks = [
	{
		title: "Tarefa 01",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 02",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
	{
		title: "Tarefa 03",
		description: "Descrição da tarefa01",
		completed: false,
	},
];

type Task = {
	title: string;
	description: string;
	completed: boolean;
};

const MyTask: React.FC = () => {
	const [showModal, setShowModal] = useState(false);

	const renderItem: ListRenderItem<Task> = ({ item }) => (
		<Task
			title={item.title}
			description={item.description}
			completed={item.completed}
		/>
	);

	return (
		<>
			<Container>
				<Title>Minhas tarefas</Title>

				<TaskList data={tasks} renderItem={renderItem} />
			</Container>

			<TaskModal visible={showModal} closeModal={() => setShowModal(false)} />
			<FloatButton onPress={() => setShowModal(true)}>
				<PlusIcon />
			</FloatButton>
		</>
	);
};

export default MyTask;
