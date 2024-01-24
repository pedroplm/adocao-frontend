import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";
import * as Yup from 'yup'
import {  useHistory  } from 'react-router-dom';

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

     const validationSchema = Yup.object().shape({
        name: Yup.string().max(12).required(),
        age: Yup.number().required(),
        species:Yup.string().max(15).required(),
        race: Yup.string().max(15).required(),
        adoptionDate: Yup.date().nullable()
     });

     


     const onSubmit = (data) =>{
        const url = "http://localhost:3001/pets";
        axios.post(url, data, {headers: {accessToken:sessionStorage.getItem("accessToken") }}).then((response) => {
          if(response.data.error){
            alert(response.data.error)
            history.push('/');
          } else {
            console.log("Funcionou!");
            history.push('/home');
          }
        });  
     }

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> 
            <Form className='form__container'>
                <label>Nome:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  className='form__container-input' name = "name" placeholder = "Nome do Pet"/>
                <label>Idade:</label>
                <ErrorMessage name = "age" component = "span"/>
                <Field  className='form__container-input' name = "age"  placeholder = "Idade do Pet"/>
                <label>Espécie:</label>
                <ErrorMessage name = "species" component = "span"/>
                <Field  className='form__container-input' name = "species"  placeholder = "Ex. Cachorro, Gato..."/>
                <label>Raça:</label>
                <ErrorMessage name = "race" component = "span"/>
                <Field className='form__container-input' name = "race"  placeholder = "Ex. Labrador..."/>
                <label>Data de Adoção:</label>
                <Field className='form__container-input' type = "date" name = "adoptionDate" placeholder = "mes/dia/ano ex: 08/15/2020"/>
                <button className='btn btn-black' type = "submit"> Adicionar novo pet</button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddPet