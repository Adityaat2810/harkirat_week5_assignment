import { useState } from "react";

function CreateCard(){

  //react query
  const [name,setName]=useState('');
  const [description,setDescription]=useState('');
  const [linkedInUrl,setLinkedinUrl] =useState('');
  const [twitterUrl,setTwitterUrl]=useState('')
  const [githubUrl,setGithubUrl] =useState('')


  return(
    <div>
        <input style={{
          padding:10,
          margin:10
        }} type="text" placeholder="name"
           onChange={function(e){
            const value = e.target.value;
            setName(value)
           }}
         ></input> <br />

        <input  style={{
          padding:10,
          margin:10
        }} type="text" placeholder="description"
        onChange={function(e){
          const value = e.target.value;
          setDescription(value)
         }} >
        </input> 

        <input  style={{
          padding:10,
          margin:10
        }} type="text" placeholder="linkedInUrl"
        onChange={function(e){
          const value = e.target.value;
          setLinkedinUrl(value)
         }} >
        </input> 

        <input  style={{
          padding:10,
          margin:10
        }} type="text" placeholder="twitterUrl"
        onChange={function(e){
          const value = e.target.value;
          setTwitterUrl(value)
         }} >
        </input> 

        <input  style={{
          padding:10,
          margin:10
        }} type="text" placeholder="githubUrl"
        onChange={function(e){
          const value = e.target.value;
          setGithubUrl(value)
         }} >
        </input> 



         <br />
        <button style={{
          padding:10,
          margin:10
        }}   onClick={()=>{
          fetch('http://localhost:4000/api/card',
                {
                method:"POST",
                body:JSON.stringify({
                  name:name,
                  shortDescription:description,
                  linkedInUrl:linkedInUrl,
                  twitterUrl:twitterUrl,
                  githubUrl:githubUrl
                }),
                headers:{
                  'Content-Type':'application/json'
                }
              }
          ).then(
            async function(res){
              const json= await res.json()
              alert('card added ')
            }
          )
        }}
        >Add a card</button> <br />
    </div>
  )

}

export default CreateCard;