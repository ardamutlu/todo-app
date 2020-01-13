import styled from 'styled-components';
import posed from 'react-pose';

export const Title = styled.h3`
  flex: 1;
  color: #331bc1;
`;

export const ListWrapper = styled.div`
  text-align: right;
`;

export const List = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchBox = posed.div({
  closed: {
    position: 'absolute',
    right: '3rem',
    top: 3,
    width: 0,
    border: '0px solid rgb(239, 239, 239)',
    borderRadius: '20px',
    overflow: 'hidden',
    marginRight: '.75rem'
  },
  open: {
    position: 'absolute',
    right: '3rem',
    top: 3,
    width: 140,
    border: '1px solid rgb(239, 239, 239)',
    borderRadius: '20px',
    overflow: 'hidden',
    marginRight: '.75rem'
  },
  initialPose: 'closed'
});
