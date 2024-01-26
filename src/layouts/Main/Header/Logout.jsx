import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLoggedOut } from '../../../features/auth/authSlice';


const Logout = () =>{
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        localStorage.clear(); 
        sessionStorage.clear();
    },[])
    if (user?.userType === 1) {
        setTimeout(() => {
            navigate("/individuals/login")
        }, 100);
    }
    if (user?.userType === 2) {
        setTimeout(() => {
            navigate("/businesses/login")
        }, 100);
    }
    dispatch(userLoggedOut())
}

export default Logout