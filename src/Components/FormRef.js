import {useEffect, useRef} from "react";
import ForwardedRef from "./Input";

export default function Form (){
    const inputRef = useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
        console.log(inputRef.current)
        console.log(inputRef.current.value)
    },[])

    return (
        <div className={'container'}>
            <p>
                <ForwardedRef ref={inputRef} type={'text'} placeholder={'Enter something'}/>
                <input type='color'/>
            </p>
        </div>
    )
}