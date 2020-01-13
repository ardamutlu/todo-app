import * as _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Dropdown } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { deleteTodoByIdRequest, updateTodoStatusByIdRequest } from '../../../../actions/todo';
import { State as AppState } from '../../../../reducers';
import { PlaceHolder } from '../../../Form/PlaceHolder';
import { CustomToggle } from './CustomToggle';
import { CustomMenu } from './CustomMenu';
import { PosedItem, PosedList } from './pose';

const MySwal = withReactContent(Swal);

interface IProps {
  handleShow: (data: any) => void;
}

export const TodoList = (props: IProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const todo = useSelector(({ todo }: Pick<AppState, 'todo'>) => todo);
  const filter = useSelector(({ todo }: Pick<AppState, 'todo'>) => todo.filter);
  const [data, setData] = useState(todo.entities);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 0);
  });

  useEffect(() => {
    setData(todo.entities);
  }, [todo.entities]);

  useEffect(() => {
    if (todo.query.length > 2) {
      const titleResult: any = todo.entities.filter(
        (data: any) => data.title.toLowerCase().indexOf(todo.query.toLowerCase()) !== -1
      );
      const descResult = todo.entities.filter(
        (data: any) => data.text.toLowerCase().indexOf(todo.query.toLowerCase()) !== -1
      );
      setData(_.uniqBy(titleResult.concat(descResult), 'id'));
    } else {
      setData(todo.entities);
    }
  }, [todo.query]);

  useEffect(() => {
    if (filter.value === 0) {
      setData(todo.entities);
    }
    if (filter.value === 1) {
      const result = todo.entities.filter((v: any) => !v.complete);
      setData(result);
    }
    if (filter.value === 2) {
      const result = todo.entities.filter((v: any) => v.complete);
      setData(result);
    }
  }, [filter]);

  const onChange = (payload: any) => {
    dispatch(updateTodoStatusByIdRequest(payload));
  };

  const editTodo = (payload: any) => {
    props.handleShow(payload);
  };

  const deleteTodo = (payload: number) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      heightAuto: false
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTodoByIdRequest(payload));
      }
    });
  };

  return todo.entities.length === 0 && todo.loading ? (
    <PlaceHolder />
  ) : (
    <>
      {data.length === 0 && todo.query.length > 2 && (
        <Alert variant="info" className="mt-3">
          {`"${todo.query}"`} <FormattedMessage id="NOT.FOUND" />
          ...
        </Alert>
      )}
      <PosedList pose={open ? 'open' : 'closed'}>
        {data.length > 0 &&
          data.map((v: any, i: number) => (
            <PosedItem key={i}>
              <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', width: 24 }}>
                  <div className="round">
                    <input
                      type="checkbox"
                      id={'checkbox-' + i}
                      onChange={() => onChange(v)}
                      defaultChecked={v.complete}
                      checked={v.complete}
                    />
                    <label htmlFor={'checkbox-' + i} />
                  </div>
                </div>
                <div style={{ paddingLeft: '1rem', flex: 1 }}>
                  <div>{v.title}</div>
                  <div style={{ fontSize: '.8rem', color: '#9E9E9E' }}>{v.text}</div>
                </div>
                <div style={{ paddingLeft: '1rem' }}>
                  <Dropdown alignRight>
                    <Dropdown.Toggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                      <Dropdown.Item eventKey="1" onClick={() => editTodo(v)}>
                        <FormattedMessage id="EDIT" />
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2" onClick={() => deleteTodo(v.id)}>
                        <FormattedMessage id="DELETE" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </PosedItem>
          ))}
      </PosedList>
    </>
  );
};
