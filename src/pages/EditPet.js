import React, {useEffect, useState } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik';

import * as Yup from 'yup'
import axios from "axios";

function EditPet() {

  let {id} = useParams();
  let history = useHistory();
  const [petById, setPetById] = useState([]);
  
  
  //mensagem de warning controlada, id é passado usando useparams
  useEffect(()=>{
        axios.get(`http://localhost:3001/pets/${id}`).then((response) => { setPetById(response.data)});  // eslint-disable-next-line
    }, [])

  //initialValues={} onSubmit={post} validationSchema={}      
    const initialValues = {
      name: petById.name,
      age: petById.age,
      species: petById.species,
      race: petById.race,
      adoptionDate: petById.adoptionDate

    }

    const validationSchema = Yup.object().shape({
      name: Yup.string().max(12).required(),
      age: Yup.number().required(),
      species:Yup.string().max(15).required(),
      race: Yup.string().max(15).required(),
      adoptionDate: Yup.date().nullable()
   });


    const onSubmit = (data) =>{
      const url = `http://localhost:3001/pets/edit/${id}`
      axios.post(url, data).then((response) => {
        console.log("Funcionou!");
        
      });
      history.push('/home');  
    }

    return (
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> 
            <Form className='form__container'>
                <label>Nome:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field className='form__container-input' name = "name"  placeholder = {petById.name}/>
                <label>Idade:</label>
                <ErrorMessage name = "age" component = "span"/>
                <Field className='form__container-input' name = "age" placeholder = {petById.age}/>
                <label>Espécie:</label>
                <ErrorMessage name = "species" component = "span"/>
                <Field className='form__container-input' name = "species" placeholder = {petById.species}/>
                <label>Raça:</label>
                <ErrorMessage name = "race" component = "span"/>
                <Field className='form__container-input' name = "race"  placeholder = {petById.race}/>
                <label>Data de Adoção:</label>
                <Field className='form__container-input' type = "date" name = "adoptionDate"/>
                <button className = "btn btn-black" type = "submit">Salvar Edição</button>
            </Form>
          </Formik>
        </div>
      
  )
}

export default EditPet