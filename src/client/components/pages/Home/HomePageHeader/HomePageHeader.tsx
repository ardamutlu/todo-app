import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { DropdownButton, Form, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faTimes, faFilter } from '@fortawesome/free-solid-svg-icons';
import { RoundedButton } from '../../../Form/Buttons/Rounded';
import { Item, List, ListWrapper, SearchBox, Title } from './styles';
import { filterTodo, searchTodo } from '../../../../actions/todo';

interface IProps {
  handleShow: () => void;
}

export const HomePageHeader = (props: IProps) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [filter, setFilter] = useState({
    value: 0,
    title: intl.formatMessage({ id: 'ALL' })
  });
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(searchTodo(query));
  }, [query]);

  useEffect(() => {
    dispatch(filterTodo(filter));
  }, [filter]);

  useEffect(() => {
    if (!open) {
      dispatch(searchTodo(''));
      setQuery('');
    }
  }, [open]);

  return (
    <section style={{ display: 'flex' }}>
      <Title>Todos</Title>
      <ListWrapper>
        <List>
          <Item className="mr-2">
            <SearchBox pose={open ? 'open' : 'closed'}>
              <Form.Control
                size="sm"
                type="text"
                placeholder={intl.formatMessage({ id: 'SEARCH.TODO' })}
                className="border-0 pl-3"
                value={query}
                onChange={(event: any) => setQuery(event.target.value)}
              />
            </SearchBox>
            <div>
              <RoundedButton
                icon={open ? faTimes : faSearch}
                shadowShow={open}
                fontColor="#331BC1"
                backgroundColor="#fff"
                className="mr-2"
                onClick={() => setOpen(!open)}
              />
            </div>
          </Item>
          <Item>
            <RoundedButton
              icon={faPlus}
              fontColor="#fff"
              backgroundColor="#331BC1"
              onClick={() => props.handleShow()}
            />
          </Item>
          <Item>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                <span>
                  <FontAwesomeIcon icon={faFilter} size="sm" />
                  <span className="pl-2 pr-2">{filter.title}</span>
                </span>
              }
              className="ml-3"
            >
              <Dropdown.Item
                href="#"
                className={filter.value === 0 ? 'active' : ''}
                onClick={() =>
                  setFilter({
                    value: 0,
                    title: intl.formatMessage({ id: 'ALL' })
                  })
                }
              >
                <FormattedMessage id="ALL" />
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className={filter.value === 1 ? 'active' : ''}
                onClick={() =>
                  setFilter({
                    value: 1,
                    title: intl.formatMessage({ id: 'INCOMPLETE' })
                  })
                }
              >
                <FormattedMessage id="INCOMPLETE" />
              </Dropdown.Item>
              <Dropdown.Item
                href="#"
                className={filter.value === 2 ? 'active' : ''}
                onClick={() =>
                  setFilter({
                    value: 2,
                    title: intl.formatMessage({ id: 'COMPLETE' })
                  })
                }
              >
                <FormattedMessage id="COMPLETE" />
              </Dropdown.Item>
            </DropdownButton>
          </Item>
        </List>
      </ListWrapper>
    </section>
  );
};
