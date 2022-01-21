import React, { useState } from "react";
import '../BranchStyles/branch.css'

function Branchhome() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
}
  
    return (
       <div className='container'>
         <nav className='navBar'>
            <div className='logo'>
                 <h2 
                 style={{
                   fontSize:'26px',
                   color:'#fff',
                   marginLeft:'10px',

                 }}>
                 Invesco</h2>
            </div>
         <div className='menu'>
           <div className="icon">
                
           </div>
           <div className="signout">
              <h3 
              style={{
              fontsize:'16px',
               color:'#fff',
               marginRight:'10px' }}>
              Signout</h3>
           </div>
           
        </div>   
         </nav>
         <div className='containerholder'>
            <input type='search' className='search' placeholder='search' />
         </div>
         <div className='Boxes'>
           <div className='firstBoxes'>
              <button className='box1' onClick={handleModal}>
                REGISTER  CLAIM
              </button>
              <button className='box1'>
                REGISTER POLICY
              </button>
           </div>
           <div className='secondBoxes'>
              <button className='box2'>
                RENEW POLICY
              </button>
              <button className='box2'>
                 UPLOAD DOCUMENTS
              </button>
           </div>
          {/**modal start */} 
           {
                showModal &&
                <div className='modal'>
                   <button className='btn' onClick={handleModal}>cancel</button>
                   <h2 className="inh2">Select the form you want to fill</h2>
                  <div className="instructions">
                    <div className="claimform">
                        <h2 className="forms">CLAIM FORM</h2>
                    </div>
                          
                    <div className="claimnotification">
                        <h2 className="forms">CLAIM NOTIFICATION</h2>
                    </div>
                  </div> 
                    
                </div>
            }
           {/**modal ends*/}   

         </div>
       </div>
           
    )
}

export default Branchhome
