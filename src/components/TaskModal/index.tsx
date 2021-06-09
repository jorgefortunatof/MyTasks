import React, { useCallback, useEffect, useState } from "react";
import { useTasks } from "../../hooks/tasks";
import TaskType from "../../types/TaskType";
import {
	Container,
	Content,
	Modal,
	CloseIcon,
	CloseIconContainer,
	Title,
	Input,
	Button,
} from "./styles";

type EditTaskModalProps = {
	taskSelected: TaskType;
	visible: boolean;
	closeModal: () => void;
};

const EditTaskModal: React.FC<EditTaskModalProps> = ({
	taskSelected,
	visible,
	closeModal,
}) => {
	const { updateTask, addTask } = useTasks();

	const [title, setTitle] = useState(taskSelected.title);
	const [description, setDescription] = useState(taskSelected.description);

	useEffect(() => {
		setTitle(taskSelected.title);
		setDescription(taskSelected.description);
	}, [taskSelected]);

	const toggleClose = useCallback(() => {
		setTitle("");
		setDescription("");
		closeModal();
	}, [closeModal, setTitle, setDescription]);

	const toggleSave = useCallback(() => {
		if (taskSelected.id) {
			const updatedTask = { ...taskSelected, title, description };
			updateTask(updatedTask);
		} else {
			console.log({ id: Math.random(), title, description, completed: false });
			addTask({ id: Math.random(), title, description, completed: false });
		}

		toggleClose();
	}, [addTask, updateTask, toggleClose, title, description]);

	return (
		<Modal onRequestClose={toggleClose} visible={visible} transparent>
			<Container>
				<Content>
					<CloseIconContainer onPress={toggleClose}>
						<CloseIcon />
					</CloseIconContainer>

					<Title>
						{taskSelected.id ? "Editar tarefa" : "Adicionar tarefa"}
					</Title>

					<Input
						placeholder="Nome da tarefa"
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
					<Input
						placeholder="Descrição da tarefa"
						value={description}
						onChangeText={(text) => setDescription(text)}
					/>

					<Button title="Salvar" onPress={toggleSave} />
				</Content>
			</Container>
		</Modal>
	);
};

export default EditTaskModal;
