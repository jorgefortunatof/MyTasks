import React from 'react';
import { Modal } from 'react-native';

import { Container, Content } from './styles';

const EditTaskModal: React.FC = () => {
	return (
		<Modal>
			<Container>
				<Content />
			</Container>
		</Modal>
	)
}

export default EditTaskModal;
