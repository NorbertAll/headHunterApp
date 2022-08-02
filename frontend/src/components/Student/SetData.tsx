import React, { CSSProperties } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Button from '@mui/material/Button';

const styles = {
  formstudent: {
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
    width: '50%',
    padding: '12px 20px',
    margin: '8px 0',
  } as CSSProperties,
};

const SetData: React.FC = () => {
  const initialValues = {
    tel: '',
    first_name: '',
    second_name: '',
    github_username: '',
    portfolio_urls: '',
    project_urls: '',
    bio: '',
    expected_type_work: '',
    target_work_city: '',
    expected_contract_type: '',
    expected_salary: '',
    can_take_apprenticeship: '',
    months_of_commercial_exp: 0,
    education: '',
    work_experience: '',
    courses: '',
  };

  const validationSchema = Yup.object().shape({
    tel: Yup.number().typeError('musisz podać numer'),
    first_name: Yup.string(),
    second_name: Yup.string(),
    github_username: Yup.string(),
    portfolio_urls: Yup.string(),
    project_urls: Yup.string(),
    bio: Yup.string(),
    expected_type_work: Yup.string(),
    target_work_city: Yup.string(),
    expected_contract_type: Yup.string(),
    expected_salary: Yup.string(),
    can_take_apprenticeship: Yup.string(),
    months_of_commercial_exp: Yup.number(),
    education: Yup.string(),
    work_experience: Yup.string(),
    courses: Yup.string(),
  });
  const onSubmit = (data: any) => {
    axios.post('http://localhost:3001/studenprofil', data).then((response) => {
      console.log(response);
    });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form className="formContainer" style={styles.formstudent}>
        <p>
          <b>Numer tel.</b>
        </p>
        <div style={styles.errors}>
          <ErrorMessage name="tel" component="span" />
        </div>
        <Field 
          style={styles.formFiels}
          id="tel"
          name="tel"
          placeholder="tel"
        />
        <br />
        <br />
        <p>
          <b>Imię</b>
        </p>
        <Field
          style={styles.formFiels}
          id="firstName"
          name="full_name"
          placeholder="Imię"
        />
        <br />
        <br />
        <p>
          <b>Nazwisko</b>
        </p>
        <Field
          style={styles.formFiels}
          id="last_name"
          name="lastName"
          placeholder="Nazwisko"
        />
        <br />
        <br />
        <p>
          <b>Login GitHuba.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="github_username"
          name="github_username"
          placeholder="Login GitHuba."
        />
        <br />
        <br />
        <p>
          <b>Tablica URL-i do portfolio</b>
        </p>
        <Field
          style={styles.formFiels}
          id="portfolioUrls"
          name="portfolio_urls"
          placeholder="Tablica URL-i do  portfolio"
        />
        <br />
        <br />
        <p>
          <b>Tablica URL-i do GitHuba projektu zaliczeniowego</b>
        </p>
        <Field
          style={styles.formFiels}
          id="project_urls"
          name="project_urls"
          placeholder="Tablica URL-i do GitHuba  projektuzaliczeniowego"
        />
        <br />
        <br />
        <p>
          <b>Krótkie bio.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="bio"
          name="bio"
          placeholder="Krótkie bio."
        />
        <br />
        <br />
        <p>
          <b>Wybór preferowanego miejsca pracy:</b>
        </p>
        <Field
          style={styles.formFiels}
          id="expected_type_work"
          name="expected_type_work"
          placeholder="Wybór preferowanego  miejsca pracy:"
        />
        <br />
        <br />
        <p>
          <b>Docelowe miasto, gdzie chce pracować kandydat.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="target_work_city"
          name="target_work_city"
          placeholder="Docelowe miasto, gdzie   chce pracowaćkandydat."
        />
        <br />
        <br />
        <p>
          <b>Oczekiwany typ kontraktu</b>
        </p>
        <Field
          style={styles.formFiels}
          id="expected_contract_type"
          name="expected_contract_type"
          placeholder="Oczekiwany typ kontraktu"
        />
        <br />
        <br />
        <p>
          <b>Oczekiwane wynagrodzenie miesięczne netto.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="expected_salary"
          name="expected_salary"
          placeholder="stawka w zł"
        />
        <br />
        <br />
        <p>
          <b>Czy kandydat wyraża zgodę na odbycie bezpłatnych praktyk/stażu na początek.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="can_take_apprenticeship"
          name="can_take_apprenticeship"
          placeholder="Tak/Nie"
        />
        <br />
        <br />
        <p>
          <b>Ilość miesięcy doświadczenia komercyjnego kandydata wprogramowaniu.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="months_of_commercial_exp"
          name="months_of_commercial_exp"
          placeholder=""
        />
        <br />
        <br />
        <p>
          <b>Przebieg edukacji.</b>
        </p>
        <Field
          style={styles.formFiels}
          id="education"
          name="education"
          placeholder="Edukacja"
        />
        <br />
        <br />
        <p>
          <b>Przebieg doświadczenia zawodowego</b>
        </p>
        <Field
          style={styles.formFiels}
          id="work_experience"
          name="work_experience"
          placeholder="Opisz doświadczenie"
        />
        <br />
        <br />
        <p>
          <b>Kursy i certyfikaty związane z programowaniem</b>
        </p>
        <Field
          style={styles.formFiels}
          id="courses"
          name="courses"
          placeholder="Kursy i certyfikaty"
        />
        <br />
        <br />
        <Button
          style={styles.sendButton}
          variant="contained"
          color="success"
          type="submit"
        >
          Wyślij dane
        </Button>
      </Form>
    </Formik>
  );
};

export { SetData }