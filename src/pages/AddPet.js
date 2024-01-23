import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import axios from "axios";


//initialValues={} onSubmit={post} validationSchema={}
function AddPet() {

    
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
          console.log("Funcionou!")
        });  
     }

  return (
    <div>
        <Formik initialValues={initialValues} onSubmit={onSubmit}> 
            <Form>
                <label>Nome:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "name" required placeholder = "Nome do Pet"/>
                <label>Idade:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "age" required placeholder = "Idade do Pet"/>
                <label>Espécie:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "species" required placeholder = "Ex. Cachorro, Gato..."/>
                <label>Raça:</label>
                <ErrorMessage name = "name" component = "span"/>
                <Field  name = "race" required placeholder = "Ex. Labrador..."/>
                <label>Data de Adoção:</label>
                <Field  type = "date" name = "adoptionDate" placeholder = "mes/dia/ano ex: 08/15/2020"/>
                <button type = "submit"> Adicionar novo Pet</button>
            </Form>
        </Formik>
    </div>
  )
}

export default AddPet