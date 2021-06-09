import React, { useState } from "react";
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
	title: string;
	description: string;
	completed: boolean;
};

const Task: React.FC<TaskProps> = ({ title, description, completed }) => {
	const [checked, setChecked] = useState(completed);

	return (
		<Container>
			<RemoveIconContainer>
				<RemoveIcon />
			</RemoveIconContainer>

			<EditIconContainer>
				<EditIcon />
			</EditIconContainer>

			<Title>{title}</Title>
			<Description>{description}</Description>
			<CheckBox value={checked} onChange={() => setChecked(!checked)} />
		</Container>
	);
};

export default Task;
