import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderComponent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem;
  width: ${({ theme }: any) => (theme.isMobile ? '100%' : '250px')};
  height: 100%;
  background: #191e82;
  color: #f5f5f5;
  font-size: 1.3rem;
`;

export const Title = styled.h3`
  width: 100%;
  padding: 1rem 2rem;
  color: #feb43e;
`;

export const SubTitle = styled.h5`
  font-size: 0.9rem;
  font-weight: 300;
  padding-left: 2rem;
  color: #feb43e;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0.5rem 0 0 0;
  padding: 0;
`;
export const Item = styled.li`
  list-style: none;
  margin: 0;
  &.active,
  &:hover {
    background-color: #1d2d8a;
    a {
      color: #fff;
      .right-arrow > svg {
        color: #fff;
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-grow: 1;
  align-items: stretch;
  position: relative;
  text-decoration: none;
  color: #b8bbe5;
  padding: 9px 2rem;
  font-size: 1rem;
  &.active,
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

export const MenuIcon = styled.span`
  flex: 0 0 35px;
`;

export const MenuLabel = styled.span`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;
