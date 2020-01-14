import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Md from 'react-markdown';
import { loadDocumentationPage } from '../../../actions/pages';
import { Head } from '../../Head';
import { Title } from './styles';
import { FormattedMessage } from 'react-intl';
const raw = require('raw.macro');

const md = process.env.NODE_ENV !== 'test' ? raw('../../../../../README.md') : 'test-code';

const Container = styled.div`
  padding: 1rem 2rem;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  & pre {
    background: #333;
    color: #f5f5f5;
    padding: 4px 12px;
    overflow: auto;
  }
`;

export const Documentation: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(loadDocumentationPage());

  return (
    <>
      <Head title="Documentation" />
      <Container>
        <Title>
          <FormattedMessage id="MENU.DOCUMENTATION" />
        </Title>
        <Md source={md} />
      </Container>
    </>
  );
};
