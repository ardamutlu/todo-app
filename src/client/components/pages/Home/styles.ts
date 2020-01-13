import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: ${({ theme }: any) => (theme.isMobile ? 'column' : 'row')};
  width: 100%;
  height: 100%;
`;

export const ListWrapper = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  height: auto;
  max-height: ${({ theme }: any) => (theme.isMobile ? '500px' : 'auto')};
  overflow-y: scroll;
`;

export const AsideWrapper = styled.div`
  height: ${({ theme }: any) => (theme.isMobile ? '600px' : 'auto')};
  max-height: ${({ theme }: any) => (theme.isMobile ? '600px' : 'auto')};
  overflow-y: scroll;
  background-color: #f8f9fd;
`;
