import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loadHomePage } from '../../../actions/pages';
import { Head } from '../../Head';
import { FormattedMessage } from 'react-intl';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  font-size: 2rem;
`;

export const NotFound: React.FC = () => {
  const dispatch = useDispatch();

  // TODO: fix
  dispatch(loadHomePage());

  return (
    <>
      <Head title="404-page" />
      <Container>
        [404] <FormattedMessage id="ERROR.NOT.FOUND" />
      </Container>
    </>
  );
};
