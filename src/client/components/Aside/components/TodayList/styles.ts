import styled from 'styled-components';

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  background-color: white;
  margin: auto;
  cursor: pointer;
`;

export const DayLabel = styled.div`
  color: #341dc0;
`;

export const DayNumber = styled.div`
  color: #341dc0;
  font-weight: 500;
  font-size: 54px;
`;

export const MonthYearLabel = styled.div`
  color: #868a9a;
  font-size: 1rem;
`;

export const ListWrapper = styled.div`
  padding-top: 3rem;
`;

export const ListTitle = styled.h4`
  color: #331bc1;
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  margin: 0 0 1.5rem 0;
  padding: 0;
`;

export const ListBody = styled.div``;

export const ListTime = styled.div<{
  color: string;
  fontSize: string;
}>`
  font-weight: 500;
  color: ${(props: any) => props.color};
  font-size: ${(props: any) => props.fontSize};
`;

export const TodoTitle = styled.div`
  font-size: 0.9rem;
`;
export const TodoDesc = styled.div`
  font-size: 1rem;
  font-weight: 500;
`;

export const Separator = styled.div`
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-top: 5px;
  width: 5px;
  height: 50px;
  background-color: #2cc73f;
  margin: 0 1rem 0 1rem;
`;
