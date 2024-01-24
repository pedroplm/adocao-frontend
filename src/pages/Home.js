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
      
    },[]);

    

    
      const deletePet = (id)=>{
        const url = `http://localhost:3001/pets/delete/${id}`;
        axios.post(url).then((response) => {
          console.log("id");
        });
        setPetList(petList.filter((val) => { 
          return (val.id !== id)
        }))
        
      }
      
      const adoptedPet = (id)=>{
        const url = `http://localhost:3001/pets/adopted/${id}`;

        axios.post(url).then((response) => {
          console.log("funcionou");
          setPetList(petList.map((val) => { 
            console.log(response);
            return (val.id === id ? {id: val.id, name: val.name, age:val.age, species: val.species, race: val.race, adoptionDate: response.data} : val) 
          }))
        })
        
        
      }

      
      

   

  return (
    <div>
        <div class = "pet__logo"/>
        {petList.map((value, key)=>{
        return (
        <div class = "pet__container">
          <ul class = "pet__container-info" >
            <li class = "pet__container-titulo"><h3 >{value.name}</h3></li>
            <li class = "pet__container-item">ID: {value.id}</li>
            <li class = "pet__container-item">Idade: {value.age}</li>
            <li class = "pet__container-item">Espécie: {value.species}</li>
            <li class = "pet__container-item">Raça: {value.race}</li>
            <li class = "pet__container-item">{value.adoptionDate ? ("Data de adoção: " + value.adoptionDate.split('-').reverse().join('/') ) : "Data de adoção: Não adotado" }</li>
          </ul>
          <div class = "pet__container-btns">
            <button class = { value.adoptionDate ? "pet__adotado btn" : "pet__container-adotar btn"} onClick = {()=> {value.adoptionDate ? console.log("já foi adotado") : adoptedPet(value.id)}}>Marcar como Adotado</button>
            <button class = "btn" onClick={()=>{history.push(`/editpet/${value.id}`)}}>Editar</button>
            <button class = "btn" onClick = {()=> {deletePet(value.id)}}>Excluir</button>
          </div>
        </div>)
      })}
    </div>
  )
}

export default Home