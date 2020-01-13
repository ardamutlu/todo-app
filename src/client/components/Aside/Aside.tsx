import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Container, ListWrapper } from './styles';
import { TodayList } from './components/TodayList';
import { useSelector } from 'react-redux';
import { DateModal } from './components/DateModal';

export const Aside: React.FC = () => {
  const isMobile = useSelector(({ app }: any) => app.isMobile);
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container pose={open ? 'open' : 'closed'} isMobile={isMobile} poseKey={isMobile}>
      {!isMobile && (
        <Link to="#" onClick={() => setOpen(!open)}>
          <FontAwesomeIcon icon={open ? faChevronRight : faChevronLeft} color="#B7BBCB" />
        </Link>
      )}
      {open ? (
        <ListWrapper>
          <TodayList startDate={startDate} handleShow={handleShow} />
        </ListWrapper>
      ) : null}
      <DateModal
        startDate={startDate}
        setStartDate={setStartDate}
        show={show}
        handleClose={handleClose}
      />
    </Container>
  );
};
