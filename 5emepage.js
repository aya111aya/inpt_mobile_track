import React from 'react'
import './5emepage.css'
import Img from './images/message.PNG'
const Page5 = () => {
  return ( <div>
    <div className='boite'>
        <div  className='p1' >boite de messagerie</div>
        <div >
        <img src={Img}  style={{width:300}}alt="Bicyclette"/>
        </div>
    </div>
    <div className='table'>
        <input  className='input1' type="text" placeholder='tapez un message'/>
    </div>
    <div className='boite2'>
        <div >
            <button className='bt2'>&larr; Retour</button>
        </div>
        <div >
            <button className='bt'>
            envoyer au propriétaire 	&rarr;
            </button>
        </div>
    </div>
  </div> )
}

export default Page5