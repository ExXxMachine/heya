import classes from "../style/CSS/Registrarion.module.css"
import {useRef} from "react";
import {useNavigate} from "react-router-dom";


const Registration = () =>{
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
    function handleClick() {
        localStorage.setItem(loginRef.current.value,JSON.stringify(passwordRef.current.value));
        navigate("/login");
    }

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