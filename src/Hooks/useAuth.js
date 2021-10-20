import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider/Authprovider"
const useAuth = () => {
    return useContext(AuthContext);
};
export default useAuth;