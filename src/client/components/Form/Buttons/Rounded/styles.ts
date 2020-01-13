import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const StyledRoundedButton = styled(Button)<any>`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: ${(props: any) => (props.backgroundColor ? props.backgroundColor : '#fff')};
  box-shadow: ${(props: any) =>
    props.shadowShow ? '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);' : 'none'}
  opacity: 0.9;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
