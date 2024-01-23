import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";
import {  useHistory  } from 'react-router-dom'

//initialValues={} onSubmit={post} validationSchema={}
function AddPet() {

    let history = useHistory();

     const initialValues = {
        name: "",
        age: "",
        species: "",
        race: "",
        adoptionDate: null

     }


     const onSubmit = (data) =>{
        const url = "http://localhost:3001/pets";
        axios.post(url, data).then((response) => {
          console.log("Funcionou!");
          history.push('/');
        });  
     }

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}> 
            <Form className='form__container'>
                <label>Nome:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  className='form__container-input' name = "name" required placeholder = "Nome do Pet"/>
                <label>Idade:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  className='form__container-input' name = "age" required placeholder = "Idade do Pet"/>
                <label>Espécie:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  className='form__container-input' name = "species" required placeholder = "Ex. Cachorro, Gato..."/>
                <label>Raça:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field className='form__container-input' name = "race" required placeholder = "Ex. Labrador..."/>
                <label>Data de Adoção:</label>
                <Field className='form__container-input' type = "date" name = "adoptionDate" placeholder = "mes/dia/ano ex: 08/15/2020"/>
                <button className='btn' type = "submit"> Adicionar novo pet</button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddPet