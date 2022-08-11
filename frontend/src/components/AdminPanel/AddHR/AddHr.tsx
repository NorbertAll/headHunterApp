import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import  { CSSProperties } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

const styles = {
  formaddhr: {
    
    flexDirection: 'row',
    marginBottom: 10,
    textAlign: "center",
  } as CSSProperties,
  sendButton:{
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  } as CSSProperties,
  errors:{
    color: "red",
  } as CSSProperties,
  formFiels:{
    width: '50%',
    padding: '12px 20px',
    margin: '8px 0',
    
  } as CSSProperties,
 
};

const AddHr = () => {
  const initialValues = {
    email: "",
    full_name: "",
    company: "",
    max_reserved_student: '',
  };
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Nieprawidłowy mail').required("Mail wymagany"),
    full_name: Yup.string().required("Imię i nazwisko wymagane"),
    name: Yup.string().required("Musisz podać nazwę firmy"),
    max_reserved_student: Yup.number().typeError('musisz podać liczbę').min(1, "za mała liczba").max(999, "za duża liczba").required("Liczba kursantów wymagana"),
  });

  const onSubmit = (data:any) => {
    axios.post("http://localhost:3001/user/hr/create", data).then((response) => {
        console.log(response);
        
    });
  };
  
  return (
    
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            
            <Form className="formContainer" style={styles.formaddhr}>
                
                <p><b>Email</b></p>
                <div style={styles.errors}>
                  <ErrorMessage name="email" component="span" />
                </div>
                <Field style={styles.formFiels} id="createHr" name="email" placeholder="Email"/>
                <br /><br />
                <p><b>Imię i nazwisko</b></p>
                <div style={styles.errors}>
                  <ErrorMessage name="full_name" component="span" />
                </div>
                <Field style={styles.formFiels} id="createHr" name="full_name" placeholder="Imię i nazwisko"/>
                <br /><br />
                <p><b>Firma:</b></p>
                <div style={styles.errors}>
                  <ErrorMessage name="company" component="span" />
                </div>
                <Field style={styles.formFiels} id="createHr" name="company" placeholder="Firma"/>
                <br /><br />
                <p><b>Ilu studentów</b></p>
                <div style={styles.errors}>
                  <ErrorMessage name="max_reserved_student" component="span" />
                </div>
                <Field style={styles.formFiels} id="createHr" name="max_reserved_student" placeholder="Ilu studentów"/><br /><br />
                <Button style={styles.sendButton} variant="contained" color="success" type='submit'>Stwórz</Button>
            </Form>

        </Formik>



    
  )
};

export default AddHr