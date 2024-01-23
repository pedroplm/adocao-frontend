import React from 'react'
import {useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom'

function Home() {
    const [petList, setPetList] = useState([]);
    let history = useHistory();

    useEffect(()=>{
  
      const url = "http://localhost:3001/pets";
      axios.get(url).then((response) => {
        setPetList(response.data);
      });  
    
      
      /* 
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setPetList(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();*/
      
    }, []);

    
      const deletePet = (id)=>{
        const url = `http://localhost:3001/pets/delete/${id}`;
        axios.post(url).then((response) => {console.log("funcionou").this.forceUpdate()});  
       
      }
      
      const adoptedPet = (id)=>{
        const url = `http://localhost:3001/pets/adopted/${id}`;
        const date = new Date(Date.now);
        axios.post(url).then((response) => {
          console.log("funcionou")
           
        })  
       
      }

   

  return (
    <div>
        {petList.map((value, key)=>{
        return (
        <div id = {key}>
          <ul>
            <li><h3 >{value.name}</h3></li>
            <li>ID: {value.id}</li>
            <li>Idade: {value.age}</li>
            <li>Espécie: {value.species}</li>
            <li>Raça: {value.race}</li>
            <li>{value.adoptionDate ? ("Data de adoção: " + value.adoptionDate) : "Data de adoção: Não adotado :(" }</li>
          </ul>
          <button onClick={()=>{history.push(`/editpet/${value.id}`)}}>Editar</button>
          <button onClick = {()=> {deletePet(value.id)}}>Excluir</button>
          <button onClick = {()=> {value.adoptionDate ? console.log("já foi adotado") : adoptedPet(value.id)}}>Marcar como Adotado</button>
        </div>)
      })}
    </div>
  )
}

export default Home