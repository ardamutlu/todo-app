import styled from 'styled-components';
import pose from 'react-pose';

const Box = pose.div({
  closed: {
    width: 80
  },
  open: {
    width: ({ isMobile }: any) => (isMobile ? '100%' : 400)
  },
  initialPose: 'open'
});

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  width: ${({ theme }: any) => (theme.isMobile ? '100%' : '400px')};
  height: 100%;
  align-items: flex-start;
  background: #f8f9fd;
  font-size: 1.3rem;
  justify-content: flex-start;
`;

export const ListWrapper = styled.div`
  width: 100%;
`;
