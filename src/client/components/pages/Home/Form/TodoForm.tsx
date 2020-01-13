import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { addNewTodoRequest, updateTodoByIdRequest } from '../../../../actions/todo';
import { FormattedMessage } from 'react-intl';

interface IProps {
  editData: any;
  show: any;
  handleClose: () => void;
}

const NewTodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required')
});

export const TodoForm = (props: IProps) => {
  const dispatch = useDispatch();

  const data = Object.assign(
    {},
    {
      title: props.editData ? props.editData.title : '',
      text: props.editData ? props.editData.text : '',
      date: props.editData && props.editData.date ? new Date(props.editData.date) : null,
      start_time:
        props.editData && props.editData.start_time ? new Date(props.editData.start_time) : null,
      end_time: props.editData && props.editData.end_time ? new Date(props.editData.end_time) : null
    }
  );

  return (
    props.show && (
      <Modal centered show={props.show} onHide={props.handleClose}>
        <Formik
          enableReinitialize
          initialValues={data}
          validationSchema={NewTodoSchema}
          onSubmit={(values) => {
            if (props.editData) {
              dispatch(
                updateTodoByIdRequest(
                  Object.assign({}, values, {
                    id: props.editData.id,
                    complete: props.editData.complete
                  })
                )
              );
            } else {
              dispatch(addNewTodoRequest(values));
            }
            props.handleClose();
          }}
        >
          {({ isSubmitting, errors }) => (
            <FormikForm>
              <Modal.Header closeButton>
                <Modal.Title>
                  {props.editData ? (
                    <FormattedMessage id="EDIT.TODO" />
                  ) : (
                    <FormattedMessage id="ADD.NEW.TODO" />
                  )}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId="title">
                  <Form.Label>
                    <FormattedMessage id="TITLE" />
                  </Form.Label>
                  <Field
                    type="text"
                    name="title"
                    className={`form-control ${errors.title && 'is-invalid'}`}
                  />
                  <ErrorMessage
                    name="title"
                    render={(msg) => (
                      <Form.Control.Feedback type="invalid" className="d-block">
                        {msg}
                      </Form.Control.Feedback>
                    )}
                  />
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>
                    <FormattedMessage id="DESCRIPTION" />
                  </Form.Label>
                  <Field as="textarea" className="form-control" type="text" rows="3" name="text" />
                </Form.Group>
                <Form.Group controlId="date">
                  <Form.Label>
                    <FormattedMessage id="DATE" />
                  </Form.Label>
                  <Field
                    name="date"
                    render={({ field, form }: any) => (
                      <DatePicker
                        wrapperClassName="d-block"
                        className="form-control"
                        selected={field.value}
                        value={field.value}
                        name={field.name}
                        onChange={(date: Date) => form.setFieldValue(field.name, date)}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>
                      <FormattedMessage id="START.TIME" />
                    </Form.Label>
                    <Field
                      name="start_time"
                      render={({ field, form }: any) => {
                        return (
                          <DatePicker
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Start Time"
                            dateFormat="h:mm aa"
                            wrapperClassName="d-block"
                            className="form-control"
                            selected={field.value}
                            value={field.value}
                            name={field.name}
                            onChange={(date: Date) => form.setFieldValue(field.name, date)}
                          />
                        );
                      }}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>
                      <FormattedMessage id="END.TIME" />
                    </Form.Label>
                    <Field
                      name="end_time"
                      render={({ field, form }: any) => (
                        <DatePicker
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="End Time"
                          dateFormat="h:mm aa"
                          wrapperClassName="d-block"
                          className="form-control"
                          selected={field.value}
                          value={field.value}
                          name={field.name}
                          onChange={(date: Date) => form.setFieldValue(field.name, date)}
                        />
                      )}
                    />
                  </Form.Group>
                </Form.Row>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                  <FormattedMessage id="CLOSE" />
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  <FormattedMessage id="SAVE" />
                </Button>
              </Modal.Footer>
            </FormikForm>
          )}
        </Formik>
      </Modal>
    )
  );
};
