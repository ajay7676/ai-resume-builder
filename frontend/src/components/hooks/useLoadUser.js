import { useEffect } from "react";
import { getProfile } from "../api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

 

 const useLoadUser = () => {
    const dispatch = useDispatch();
    useEffect(() => {

        const loadUser = async () => {
            try {
                const token = localStorage.getItem("resume-token");
                if(!token) return;

                const data  = await getProfile();

                dispatch(
                    setCredentials({
                        user: data.user,
                        token,
                    })
                )

                
            } catch (error) {
                 console.log(error)
                
            }
        }

        loadUser();

    } , [dispatch] )

 }


 export default useLoadUser;