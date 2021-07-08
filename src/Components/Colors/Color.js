import React from 'react';





const Color = ({id,name,pressButton,text}) => {
   
 
    return (
        <div>
        
            <div  id={id} className={name} onClick={pressButton}>{text} </div>
        

            </div>
        
    )
}

export default Color