import React from 'react'
import { Link } from 'react-router-dom';
const Page1 = () => {
  return (
 <div className="App">
      <div className='connexion' >
       <p> Connexion</p>
      </div>
      <div className='input'>
      <input  className='input_style' type="text"  placeholder='address email'/>
      <input  className='input_style' type="text"  placeholder='password'/>
      </div>
      <div className='buton'>
        <button className='button'>se connecter</button>
        <div style={{marginTop:30}}>
        mot de pass oublié?
      </div>
      </div>
      <div className="line-with-word">
     
      <div className="line">  </div>
     
    </div>
      <div className='buton'>
      <Link to="/new">
      <button className='button'>
          créer un compte &rArr;
        </button>
      </Link>
        
      </div>
    </div>
  )
}

export default Page1
