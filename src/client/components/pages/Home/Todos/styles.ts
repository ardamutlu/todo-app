import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 1rem 0;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border-bottom: none;
  }
`;
