import {useDispatch, useSelector} from "react-redux";
import {login} from "../features/user";
import {Link} from "react-router-dom"
import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errorMess, setErrorMess] = useState();
    const navigate = useNavigate();
    const loginRef = useRef(null);
    const passwordRef = useRef(null);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value);
    const notValid = () => {
        setErrorMess("invalid username or password");
    }
    const loginFunc = () =>{
        const storage = localStorage.getItem(loginRef.current.value.trim());
        if (storage){
            if("\"" + passwordRef.current.value + "\"" == storage){
                dispatch((login({name:loginRef.current.value,})));
                console.log(user.name);
                navigate("/profile");
            }else{
                notValid();
                console.log("error");
            }
        }else{
            console.log("error");
        }
    }
    return(
        <div className={"d-flex flex-column"}>
            <input placeholder={"login"} ref={loginRef}/>
            <input placeholder={"password"} ref={passwordRef} />
            <div>{errorMess}</div>
            <div>
            <button onClick={loginFunc}>Login</button>
            <Link to={"/registration"}><button>Sing in</button></Link>
            </div>
        </div>
    )
}
export {Login}