import React from "react";
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
	visible: boolean;
	closeModal: () => void;
};

const EditTaskModal: React.FC<EditTaskModalProps> = ({
	visible,
	closeModal,
}) => {
	return (
		<Modal onRequestClose={closeModal} visible={visible} transparent>
			<Container>
				<Content>
					<CloseIconContainer onPress={closeModal}>
						<CloseIcon />
					</CloseIconContainer>
					<Title>Adicionar tarefa</Title>

					<Input placeholder="Nome da tarefa" />
					<Input placeholder="Descrição da tarefa" />

					<Button title="Salvar" onPress={() => {}} />
				</Content>
			</Container>
		</Modal>
	);
};

export default EditTaskModal;
