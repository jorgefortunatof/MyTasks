import styled from "styled-components/native";
import colors from "./colors";

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
	justify-content: flex-start;

	overflow-y: scroll;
	background-color: ${colors.primary};
`;
