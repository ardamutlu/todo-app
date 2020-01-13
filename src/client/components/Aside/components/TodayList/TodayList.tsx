import moment from 'moment';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { State as AppState } from '../../../../reducers';
import {
  Circle,
  DayLabel,
  DayNumber,
  Item,
  List,
  ListTime,
  ListBody,
  ListTitle,
  ListWrapper,
  MonthYearLabel,
  Separator,
  TodoTitle,
  TodoDesc
} from './styles';
import { FormattedMessage } from 'react-intl';

interface IProps {
  handleShow: () => void;
  startDate: Date;
}

export const TodayList: React.FC<IProps> = ({ handleShow, startDate }: IProps) => {
  const todo = useSelector(({ todo }: Pick<AppState, 'todo'>) => {
    return todo.entities.filter(
      (v: any) =>
        moment(v.date).format('DD/MM/YYYY') === moment(startDate.toISOString()).format('DD/MM/YYYY')
    );
  });

  return (
    <>
      <Circle onClick={handleShow} className="text-center">
        <DayLabel>{moment(startDate).format('dddd')}</DayLabel>
        <DayNumber>{moment(startDate).date()}</DayNumber>
        <MonthYearLabel>
          {moment(startDate).format('MMM')} {moment(startDate).format('YYYY')}
        </MonthYearLabel>
      </Circle>
      <ListWrapper>
        <ListTitle>Todo&apos;s</ListTitle>
        <List>
          {todo.length > 0 ? (
            todo.map((v: any) => {
              return (
                <Item>
                  <ListBody>
                    {v.start_time && (
                      <ListTime color="#331bc1" fontSize="1.2rem">
                        {moment(v.start_time).format('HH:hh')}
                      </ListTime>
                    )}
                    {v.start_time && (
                      <ListTime color="#B0AACC" fontSize=".9rem">
                        {moment(v.end_time).format('HH:hh')}
                      </ListTime>
                    )}
                    {!v.start_time && !v.end_time && (
                      <FontAwesomeIcon icon={faCalendarTimes} size="2x" />
                    )}
                  </ListBody>
                  <Separator />
                  <ListBody>
                    <TodoTitle>{v.title}</TodoTitle>
                    <TodoDesc>{v.text}</TodoDesc>
                  </ListBody>
                </Item>
              );
            })
          ) : (
            <div>
              Todo <FormattedMessage id="NOT.FOUND" />
            </div>
          )}
        </List>
      </ListWrapper>
    </>
  );
};
