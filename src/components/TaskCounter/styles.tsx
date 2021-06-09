import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
	margin: 30px 0;
	flex-direction: row;
`;

export const Title = styled.Text`
	font-weight: bold;
	border-bottom-color: ${colors.white};

	color: ${colors.white};
`;

export const TasksNumber = styled.Text`
	text-align: center;
	color: ${colors.white};
`;

export const Box = styled.View`
	margin-right: 10px;
	padding: 10px;

	border-radius: 6px;

	background-color: ${colors.black};
`;
