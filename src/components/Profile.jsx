import {useSelector} from "react-redux"
import {logout} from "../features/user";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const logoutFunc = () =>{
        dispatch(logout({name:"",}))
        navigate("/login")
    }
    return(
        <div>
            <h1>Profile Page</h1>
            <p>Name: {user.name}</p>
            <button onClick={logoutFunc}>Logout</button>
        </div>
    )
}
export {Profile};