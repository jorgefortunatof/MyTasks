import styled from 'styled-components/native';
import { transparentize } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;

	background-color: ${transparentize(0.5, colors.black)};
`;

export const Content = styled.View`
	min-width: 70%;

	margin: 40px;
	border-radius: 10px;

	background-color: ${colors.white};
`;
