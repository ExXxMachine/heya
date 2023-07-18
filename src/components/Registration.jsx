import classes from "../style/CSS/Registrarion.module.css"
import {useEffect, useRef, useState} from "react";

const Registration = () =>{
    const loginRef = useRef(null);
    const passwordRef = useRef(null);


    function handleClick() {
        localStorage.setItem(loginRef.current.value,JSON.stringify(passwordRef.current.value));
    }
    // const [data, setData] = useLocalStorage([], "data");
    // const addData = () => {
    //     const newData = {
    //         login:loginRef.current.value,
    //         password:passwordRef.current.value,
    //     }
    //     setData([...data, newData]);
    // }
    return(
        <div className={classes.registration__body}>
            registration
                <input placeholder={"login"} ref={loginRef}/>
                <input placeholder={"password"} ref={passwordRef} />
                <button type={"submit"} onClick={handleClick}>Sing in</button>
        </div>
    )
}
export {Registration};