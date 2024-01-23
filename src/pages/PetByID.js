import React, {useEffect, useState } from 'react'
import { useParams, useHistory  } from 'react-router-dom'
import axios from 'axios'

function PetByID() {
  let {id} = useParams();
  let history = useHistory();
  const [petById, setPetById] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3001/pets/${id}`).then((response) => { setPetById(response.data)});  
    }, [])

    return (
        <div>
          <ul>
            <li><h3 >{petById.name}</h3></li>
            <li>ID: {petById.id}</li>
            <li>Idade: {petById.age}</li>
            <li>Espécie: {petById.species}</li>
            <li>Raça: {petById.race}</li>
            <li>{petById.adoptionDate ? ("Data de adoção: " + petById.adoptionDate) : "Data de adoção: Não adotado :(" }</li>
          </ul>
          <button onClick={()=>{history.push(`/editpet/${petById.id}`)}}>Editar</button>
        </div>
      
  )
}

export default PetByID