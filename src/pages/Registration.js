import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {  useHistory  } from 'react-router-dom';
import axios from "axios";
import * as Yup from 'yup'


function Registration() {

  let history = useHistory();

  const initialValues = {
    username: "",
    password: ""

  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Minimo 3 caracteres').max(12, 'maximo 12 caracteres').required('É necessario colocar um username'),
    password: Yup.string().min(4, 'Minimo 4 caracteres').max(20, 'maximo 12 caracteres').required('É necessario colocar uma senha'),
  });

  const onSubmit = (data) =>{
    axios.post("http://localhost:3001/users/signin", data).then(()=>{
      console.log(data);
      alert("Conta criada com sucesso!")
      history.push("/");
    })
  }



  return (
    <div>
      
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> 
            <Form className='form__container'>
                <h2 className = 'subtitle'>Criar conta</h2>
                <label>Username:</label>
                <ErrorMessage name = "username" component = "span"/>
                <Field  className='form__container-input' name = "username" placeholder = "Seu username"/>
                <label>Senha:</label>
                <ErrorMessage name = "password" component = "span"/>
                <Field  type = "password" className='form__container-input' name = "password" placeholder = "Sua senha"/>
                <button className='btn btn-black' type = "submit">Criar conta</button>
            </Form>
        </Formik>
    </div>
  )
}

export default Registration