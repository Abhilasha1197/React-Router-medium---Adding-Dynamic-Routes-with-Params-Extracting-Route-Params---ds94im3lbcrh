import React from 'react';
import { useParams } from 'react-router-dom';


export const BackgroundColorChanger = () =>{
    const param = useParams();
    return(
       <main style={{height:'100vh',backgroundColor:param.colorname}}>
       </main>
    )
}