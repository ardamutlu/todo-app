import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadHomePage } from '../../../actions/pages';
import { Head } from '../../Head';
import { TodoList } from './Todos';
import { HomePageHeader } from './HomePageHeader';
import { Aside } from '../../Aside';
import { AsideWrapper, ListWrapper, Section } from './styles';
import { TodoForm } from './Form';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);

  dispatch(loadHomePage());

  const handleClose = () => setShow(false);
  const handleShow = (data?: any) => {
    if (data) {
      setEditData(data);
    } else {
      setEditData(null);
    }
    setShow(true);
  };

  return (
    <>
      <Head title="To-do List" />
      <Section>
        <ListWrapper>
          <HomePageHeader handleShow={handleShow} />
          <TodoList handleShow={handleShow} />
        </ListWrapper>
        <AsideWrapper>
          <Aside />
        </AsideWrapper>
      </Section>
      <TodoForm editData={editData} show={show} handleClose={handleClose} />
    </>
  );
};
