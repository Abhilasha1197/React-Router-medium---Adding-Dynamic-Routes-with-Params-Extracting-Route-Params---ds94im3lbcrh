import React from "react";
import { useSearchParams } from "react-router-dom";


export const Calculator = () =>{
    const  [qr] = useSearchParams();
    const n1 = Number(qr.get('num1'));
    const n2 = Number(qr.get('num2'));
    const op = qr.get('op');
    // console.log(n1,n2,op);
    let result = eval(`${n1}${op}${n2}`);
    return(
        <div>Your calculation Result is <span id="calc-result">{result}</span></div>
    )
}