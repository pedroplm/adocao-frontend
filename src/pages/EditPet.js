import React, {useEffect, useState } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";

function EditPet() {

  let {id} = useParams();
  let history = useHistory();
  const [petById, setPetById] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/pets/${id}`).then((response) => { setPetById(response.data)});  
    }, [])

  //initialValues={} onSubmit={post} validationSchema={}      
    const initialValues = {
      name: petById.name,
      age: petById.age,
      species: petById.species,
      race: petById.race,
      adoptionDate: petById.adoptionDate

    }


    const onSubmit = (data) =>{
      const url = `http://localhost:3001/pets/edit/${id}`
      axios.post(url, data).then((response) => {
        console.log("Funcionou!")
      });  
    }

    return (
      <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}> 
            <Form>
                <label>Nome:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "name" required placeholder = {petById.name}/>
                <label>Idade:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "age" required placeholder = {petById.age}/>
                <label>Espécie:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "species" required placeholder = {petById.species}/>
                <label>Raça:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "race" required placeholder = {petById.race}/>
                <label>Data de Adoção:</label>
                <Field  type = "date" name = "adoptionDate"/>
                <button type = "submit">Salvar Edição</button>
            </Form>
          </Formik>
        </div>
      
  )
}

export default EditPet