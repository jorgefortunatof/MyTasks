import React, { useEffect, useState } from "react";
import { useTasks } from "../../hooks/tasks";
import TaskType from "../../types/TaskType";
import {
	Container,
	Title,
	Description,
	CheckBox,
	RemoveIcon,
	RemoveIconContainer,
	EditIcon,
	EditIconContainer,
} from "./styles";

type TaskProps = {
	data: TaskType;

	toggleEdit: (task: TaskType) => void;
};

const Task: React.FC<TaskProps> = ({ data, toggleEdit }) => {
	const { title, description, completed } = data;

	const { updateTask, removeTask } = useTasks();
	const [checked, setChecked] = useState(completed);

	useEffect(() => {
		const updatedTask = { ...data, completed: checked };
		updateTask(updatedTask);
	}, [checked]);

	return (
		<Container>
			<RemoveIconContainer onPress={() => removeTask(data)}>
				<RemoveIcon />
			</RemoveIconContainer>

			<EditIconContainer onPress={() => toggleEdit(data)}>
				<EditIcon />
			</EditIconContainer>

			<Title>{title}</Title>
			<Description>{description}</Description>
			<CheckBox value={checked} onChange={() => setChecked(!checked)} />
		</Container>
	);
};

export default Task;
