import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Modal } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { State as AppState } from '../../../../reducers';
import * as _ from 'lodash';

export const DateModal = (props: any) => {
  const todo = useSelector(({ todo }: Pick<AppState, 'todo'>) => todo.entities);

  const highlightDates = _.compact(
    _.map(todo, function(n: any) {
      return n.date !== null ? new Date(n.date) : null;
    })
  );

  const onChange = (date: Date) => {
    props.setStartDate(date);
    props.handleClose();
  };

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      centered
      dialogClassName="w-275 transparent-modal"
    >
      <Modal.Body>
        <button type="button" className="close" onClick={props.handleClose}>
          <span aria-hidden="true">×</span>
          <span className="sr-only">
            <FormattedMessage id="CLOSE" />
          </span>
        </button>
        <DatePicker
          selected={props.startDate}
          onChange={(date: Date) => onChange(date)}
          highlightDates={highlightDates}
          inline
        />
      </Modal.Body>
    </Modal>
  );
};
