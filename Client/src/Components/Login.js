import {React,useState} from 'react';
import Signup from './Signup'; 
import axios from 'axios';
export default function Login (){
const[usuario,setUsuario]=useState({
    usuario:"",
    pword:""
});
const [cookie,setCookie] = useState("");
   
function handleInputSubmit(e){
      e.preventDefault();
      const headers = {
        'Accept' : '*/*',
        'withCredentials': 'true'};
        
      axios.post(process.env.REACT_APP_HOST_SIGNIN, {
        usuario: usuario.usuario,
        pword:usuario.pword,
        },{withCredentials:true} 
        ).then((response) => {
              console.log(response.data);
              console.log(response.data.accessToken)
              setCookie(response.data.accessToken)
          
            }, (error) => {
              console.log(error);
            });
    }

    function handleInputChange(e){

       setUsuario({...usuario,
        [e.target.id] : e.target.value
        } );

    }

return(
    <div style={{display:`flex`,width:`100vw`,height:`100vh`,justifyContent:`center`}}>  
    <div style={{display:`flex`,marginTop:`30vh`,height:`40vh`,backgroundColor:`white`,alignItems:`center`,borderRadius:`7px` ,border:` 3px solid black`}}> 
    <form onSubmit={e => handleInputSubmit(e)}>
       <table style={{padding:`3vw`}}>
        <tr>
          <td align="right">Usuario:</td>
          <td align="left"><input id="usuario" onChange={e => handleInputChange(e)}/> </td>
        </tr>
        <tr>
          <td align="right">Contraseña:</td>
          <td align="left"><input id="pword"   onChange={e => handleInputChange(e)} /> </td>
        </tr>
        
      
            </table> 
            <button style={{marginInlineStart:`18em`,width:`4.5em`}}> Entrar</button> 
           

                 </form> 
                 
                   </div>

 <> 
 <Signup/>
 </> 


    </div>






);  }