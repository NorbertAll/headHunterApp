import React, { CSSProperties } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';

const styles = {
  formpassword: {
    flexDirection: 'row',
    marginBottom: 10,
    textAlign: 'center',
  } as CSSProperties,
  sendButton: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as CSSProperties,
  errors: {
    color: 'red',
  } as CSSProperties,
  formFiels: {
    width: '30%',
    padding: '12px 20px',
    margin: '8px 0',
  } as CSSProperties,
};

const ChangePassword: React.FC = () => {
  const initialValues = {
    password: '',
    password_confirm: '',
  };
  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Podaj hasło'),
    password_confirm: Yup.string().required('Musisz potwierdzić hasło'),
  });

  const onSubmit = (data: any) => {
    if (data.password === data.password_confirm) {
      axios.post('http://localhost:3001/newpassword', data).then((response) => {
        console.log(response);
      });
    } else {
      alert('Hasła różne');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="formContainer" style={styles.formpassword}>
        <p>
          <b>Nowe hasło</b>
        </p>
        <div style={styles.errors}>
          <ErrorMessage name="password" component="span" />
        </div>
        <Field
          style={styles.formFiels}
          id="password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <br />
        <br />
        <p>
          <b>Potwierdź nowe hasło</b>
        </p>
        <div style={styles.errors}>
          <ErrorMessage name="password_confirm" component="span" />
        </div>
        <Field
          style={styles.formFiels}
          id="password_confirm"
          type="password"
          name="password_confirm"
          placeholder="Confirm Password"
        />
        <br />
        <br />

        <Button
          style={styles.sendButton}
          variant="contained"
          color="success"
          type="submit"
        >
          Stwórz
        </Button>
      </Form>
    </Formik>
  );
};

export { ChangePassword };
