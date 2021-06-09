import React, { createContext, useCallback, useContext, useState } from "react";

type Task = {
	id: number;
	title: string;
	description: string;
	complete: boolean;
};

type TasksContextData = {
	tasks: Task[];
	addTask: (task: Task) => void;
	removeTask: (task: Task) => void;
	updateTask: (task: Task) => void;
};

const TaskContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider: React.FC = ({ children }) => {
	const [tasks, setTasks] = useState<Task[]>([
		{
			id: Math.random(),
			title: "Tarefa 01",
			description: "Tarefa 01 descrição",
			complete: false,
		},
		{
			id: Math.random(),
			title: "Tarefa 02",
			description: "Tarefa 02 descrição",
			complete: false,
		},
		{
			id: Math.random(),
			title: "Tarefa 03",
			description: "Tarefa 03 descrição",
			complete: false,
		},
	]);

	const updateTask = useCallback(
		(task: Task) => {
			const taskIndex = tasks.findIndex((itemTask) => itemTask.id === task.id);

			if (taskIndex < 0) return;

			let newTasks = [...tasks];
			newTasks[taskIndex] = task;

			setTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const addTask = useCallback(
		(task: Task) => {
			const newTasks = [...tasks, task];
			setTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const removeTask = useCallback(
		(task: Task) => {
			const newTasks = tasks.filter((itemTask) => itemTask.id !== task.id);

			setTasks(newTasks);
		},
		[tasks, setTasks]
	);

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, updateTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export function useTasks() {
	const context = useContext(TaskContext);

	if (!context) {
		throw new Error("useTasks deve ser usado com um provider!");
	}

	return context;
}
