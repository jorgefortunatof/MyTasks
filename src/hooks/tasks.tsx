import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";
import { getTasksFromStorage, storeTasks } from "../storage/tasksStorage";
import TaskType from "../types/TaskType";

type TasksContextData = {
	tasks: TaskType[];
	filteredTasks: TaskType[];
	// taskSelectedToEdit: TaskType;

	addTask: (task: TaskType) => void;
	removeTask: (task: TaskType) => void;
	updateTask: (task: TaskType) => void;

	filterTasks: (filter: TaskFilter) => void;
	removeFilter: () => void;
};

type TaskFilter = {
	completed: boolean;
};

const TaskContext = createContext<TasksContextData>({} as TasksContextData);

export const TasksProvider: React.FC = ({ children }) => {
	// const [taskToEdit, setTaskToEdit] = useState<TaskType>({} as TaskType);
	const [tasks, setTasks] = useState<TaskType[]>([]);

	const [filteredTasks, setFilteredTasks] = useState<TaskType[]>([]);
	const [taskFilter, setTaskFilter] = useState<TaskFilter>({} as TaskFilter);

	useEffect(() => {
		getTasks();
	}, []);

	useEffect(() => {
		if (taskFilter.completed === undefined) {
			setFilteredTasks(tasks);
		} else {
			const filtered = tasks.filter(
				(task) => task.completed === taskFilter.completed
			);
			setFilteredTasks(filtered);
		}
	}, [taskFilter, tasks]);

	const getTasks = useCallback(async () => {
		const tasks = await getTasksFromStorage();
		setTasks(tasks);
	}, [setTasks, getTasksFromStorage]);

	const updateTask = useCallback(
		(task: TaskType) => {
			const taskIndex = tasks.findIndex((itemTask) => itemTask.id === task.id);

			if (taskIndex < 0) return;

			let newTasks = [...tasks];
			newTasks[taskIndex] = task;

			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const addTask = useCallback(
		(task: TaskType) => {
			const newTasks = [...tasks, task];
			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const removeTask = useCallback(
		(task: TaskType) => {
			const newTasks = tasks.filter((itemTask) => itemTask.id !== task.id);

			setTasks(newTasks);
			storeTasks(newTasks);
		},
		[tasks, setTasks]
	);

	const filterTasks = useCallback((filter: TaskFilter) => {
		setTaskFilter(filter);
	}, []);

	const removeFilter = useCallback(() => {
		setTaskFilter({} as TaskFilter);
	}, []);

	return (
		<TaskContext.Provider
			value={{
				tasks,
				filteredTasks,
				addTask,
				removeTask,
				updateTask,
				filterTasks,
				removeFilter,
			}}
		>
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
