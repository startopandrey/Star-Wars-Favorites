import styled from 'styled-components/native';
import {Text} from '../../../components/typography/text.component';
import {Button} from 'react-native-paper';

export const Header = styled.View`
  padding: ${props => props.theme.space[2]};
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled(Text)``;
export const ClearButton = styled(Button)``;
export const CounterWrapper = styled.View`
  padding: ${props => props.theme.space[2]};
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
`;
