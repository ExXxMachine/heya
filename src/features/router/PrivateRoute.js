import {Navigate, Outlet} from "react-router-dom";
const LocalFlag = () =>{
    const auth = localStorage.getItem("flag");
    if (auth == "false"){
        return false
    }
    return true
}
const PrivateRoute = () =>{
    return(
        LocalFlag() ? <Outlet/> : <Navigate to={"login"}/>
    );
};
export {PrivateRoute};